import java.util.HashMap;

public class Indexer {

    private HashMap<String, HashMap> index;

    public Indexer(){
        this.index = new HashMap();
    }

    public void AddToIndex(String domain, String account, String cid){
        HashMap<String, String> domainMetadata = new HashMap<>();
        domainMetadata.put("account", account);
        domainMetadata.put("cid", cid);
        this.index.put(domain, domainMetadata);
    }

    public boolean DomainAvailable(String domain){
        if (this.index.containsKey(domain)){
            return false;
        }
        return true;
    }

    public void UpdateDomain(String oldDomain, String newDomain){

        HashMap domainMetadata = this.index.get(oldDomain);
        this.index.remove(oldDomain);
        this.index.put(newDomain, domainMetadata);
    }

    public HashMap ResolveDomain(String domain){
        return this.index.get(domain);
    }

    public HashMap<String, HashMap> getIndexes(){ return this.index; }
}
