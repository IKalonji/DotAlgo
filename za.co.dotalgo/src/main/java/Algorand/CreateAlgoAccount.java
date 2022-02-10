package Algorand;


import com.algorand.algosdk.account.Account;

/***
 * For testing purposes create and account, fund it and test this implementation
 * of the account indexer.
 */
public class CreateAlgoAccount {

    public Account createNewAccount()  throws Exception {
        try {
            Account account = new Account();
            return account;
        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception("Account creation error " + e.getMessage());
        }
    }

    public Account createAccountFromSeed(String seed) throws Exception {
        try {
            Account account = new Account(seed);
            return account;
        }catch (Exception e){
            e.printStackTrace();
            throw new Exception("Account creation error " + e.getMessage());
        }
    }
}
