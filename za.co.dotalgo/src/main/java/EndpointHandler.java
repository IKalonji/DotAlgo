import Algorand.CreateAlgoAccount;
import Algorand.CreateDomainAsset;
import com.algorand.algosdk.account.Account;
import io.javalin.http.Context;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EndpointHandler {
    public final String create = "/create/{domain}";
    public final String update = "/update/{oldDomain}/{newDomain}";
    public final String resolve = "/resolve/{domain}";
    public final String allDomains = "/all";
    public final String available = "/available/{domain}";

    public final String account = "/account";
    private Indexer domainIndex;
    private CreateDomainAsset domainNFT;
    private CreateAlgoAccount createAlgoAccount;

    public EndpointHandler() throws Exception {

        this.domainIndex = new Indexer();
        this.domainNFT = new CreateDomainAsset();
        this.createAlgoAccount = new CreateAlgoAccount();
    }

    public void DomainAvailable(Context context){
        String domain = context.pathParam("domain").toLowerCase();
        boolean isAvailable = this.domainIndex.DomainAvailable(domain);
        JSONObject response = new JSONObject();
        response.put("available", isAvailable);
        context.status(200);
        context.json(response);
    }

    public void CreateAlgoDomain(Context context) throws Exception {
        String domain = context.pathParam("domain").toLowerCase();
        String body = context.body();
        JSONParser parser = new JSONParser();
        JSONObject jsonBody =(JSONObject) parser.parse(body);
        String seed = (String) jsonBody.get("account_mneumonic");
        Account account = this.createAlgoAccount.createAccountFromSeed(seed);

        JSONObject response = new JSONObject();

        if (this.domainIndex.DomainAvailable(domain)){
            this.domainNFT.CreateDomainAsset(account, seed);
            this.domainIndex.AddToIndex(domain, account.getAddress().toString());
            response.put("result", "Created");
            response.put("domain", domain);
            response.put("account", account);
        }else{
            response.put("result", "Domain Exists");
        }
        context.status(200);
        context.json(response);
    }

    public void UpdateAlgoDomain(Context context){
        String oldDomain = context.pathParam("oldDomain").toLowerCase();
        String newDomain = context.pathParam("newDomain").toLowerCase();
        JSONObject response = new JSONObject();
        if (!this.domainIndex.DomainAvailable(oldDomain)){
            this.domainIndex.UpdateDomain(oldDomain, newDomain);
            response.put("result", "Domain");
            response.put("domain", newDomain);
            response.put("account", this.domainIndex.ResolveDomain(newDomain));
        }else {
            response.put("result", "Domain does not Exist");
        }
        context.status(200);
        context.json(response);
    }

    public void ResolveAlgoDomain(Context context){
        String domain = context.pathParam("domain");
        JSONObject response = new JSONObject();
        if (!this.domainIndex.DomainAvailable(domain)){
            response.put("domain", domain);
            response.put("account", this.domainIndex.ResolveDomain(domain));
        }else {
            response.put("domain", domain);
            response.put("domain", "No account for this domain");
        }
        context.status(200);
        context.json(response);
    }

    public void GetAllAlgoDomains(Context context){
        JSONObject response = new JSONObject();
        List accountList = new ArrayList<>();
        HashMap<String, String> indexes = this.domainIndex.getIndexes();
        for (Map.Entry mapElement : indexes.entrySet()){
            accountList.add(mapElement);
        }
        response.put("wallets", accountList);
        context.status(200);
        context.json(response);

    }

    public void AlgoAccountCreate(Context context) throws Exception {

        Account account = createAlgoAccount.createNewAccount();
        JSONObject response = new JSONObject();
        response.put("account", account.getAddress());
        response.put("passphrase", account.toMnemonic());
        response.put("funding_link", "https://dispenser.testnet.aws.algodev.network?account=" + account.getAddress().toString());
        context.status(200);
        context.json(response);
    }
}
