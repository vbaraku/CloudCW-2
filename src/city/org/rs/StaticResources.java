//package city.org.rs;
//
//import java.io.InputStream;
//import java.util.Objects;
//
//import javax.inject.Inject;
//import javax.ws.rs.GET;
//import javax.ws.rs.Path;
//import javax.ws.rs.PathParam;
//import javax.ws.rs.core.Response;
//
//@Path("")
//public class StaticResources {
//
//  @Inject ServletContext context;
//
//  @GET
//  @Path("{path: ^static\\/.*}")
//  public Response staticResources(@PathParam("path") final String path) {
//
//    InputStream resource = context.getResourceAsStream(String.format("/WEB-INF/%s", path));
//
//    return Objects.isNull(resource)
//        ? Response.status(404).build()
//        : Response.ok().entity(resource).build();
//  }
//}
