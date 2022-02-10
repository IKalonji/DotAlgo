import io.javalin.Javalin;

public class Main {

    public static void main(String[] args) throws Exception {

        EndpointHandler handler = new EndpointHandler();
        Javalin server = Javalin.create(javalinConfig -> {javalinConfig.enableCorsForAllOrigins();});
        server.post(handler.create, handler::CreateAlgoDomain);
        server.get(handler.update, handler::UpdateAlgoDomain);
        server.get(handler.resolve, handler::ResolveAlgoDomain);
        server.get(handler.allDomains, handler::GetAllAlgoDomains);
        server.get(handler.available, handler::DomainAvailable);
        server.get(handler.account, handler::AlgoAccountCreate);

        server.start(3000);
    }
}
