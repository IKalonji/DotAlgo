import java.util.HashMap;

public class Indexer {

    private HashMap<String, String> index;

    public Indexer(){
        this.index = new HashMap();
    }

    public void AddToIndex(String domain, String account){
        this.index.put(domain, account);
    }

    public boolean DomainAvailable(String domain){
        if (this.index.containsKey(domain)){
            return false;
        }
        return true;
    }

    public void UpdateDomain(String oldDomain, String newDomain){
        String account = this.index.get(oldDomain);
        this.index.remove(oldDomain);
        this.index.put(newDomain, account);
    }

    public String ResolveDomain(String domain){
        return this.index.get(domain);
    }

    public HashMap<String, String> getIndexes(){ return this.index; }
}
