package city.org.rs;

import java.net.URI;
import java.net.URISyntaxException;
import java.security.Principal;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.security.DenyAll;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.OPTIONS;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

@Path("/records")
public class RecordResource {

	// DAO class creates and returns its single instance
	// This instance is then used by all APIs below to call the appropriate DAO
	// methods
	private RecordDAO dao = RecordDAO.getInstance();
	@Context
    SecurityContext securityContext;
	// API to list all products
	@GET
	@RolesAllowed({"USER","ADMIN"})
	@Produces(MediaType.APPLICATION_JSON)
	public List<Record> list(@QueryParam("from") long startingDate, @QueryParam("to") long endingDate, @QueryParam("userId") String userId) {
		try {
			return dao.getAllInfo(userId, startingDate, endingDate);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			return new ArrayList<Record>();
		}
	}
	
	@GET
	@Path("/average")
	@RolesAllowed({"USER","ADMIN"})
//	@DenyAll
	@Produces(MediaType.APPLICATION_JSON)
	public RecordAverageDTO getAverageGlucose(@QueryParam("from") long startingDate, @QueryParam("to") long endingDate, @QueryParam("userId") String id, @Context SecurityContext sc) {
		try {
			return dao.getAverageGlucose(id, startingDate, endingDate);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			 	
			return null;
		}
	}

	// API to insert new product
	/*
	 * NOTE: ---- When the below method is invoked by a request it returns a
	 * response inside a Response object. Response is a class that CANNOT be
	 * instantiated directly (e.g. through the "new" command). Instead, it uses the
	 * so called "builder design pattern" whereby object creation is delegated to a
	 * set of builders (hence the .build() method call below). This is because
	 * responses are complex entities: a response comprises 3 lines (status line,
	 * headers, body) and, if headers are present, they may encompass many
	 * (optional) key/value pairs. As such, responses need to be represented through
	 * complex objects.
	 * 
	 * These complex objects can be constructed through overloaded constructors but
	 * the whole thing gets really messy when one considers optional parameters
	 * (each requires a separate constructor). Alternatively, one could implement a
	 * single no-args constructor and then rely on a multitude of setter methods for
	 * setting all the different header parameters and options but this too gets
	 * messy. Instead with the builder design pattern a separate builder is used for
	 * creating each different part of a response message. For instance, in the POST
	 * API below, a builder is used for building (instantiating) a response that
	 * returns the created URI, whereas in the PUT API below, a different builder is
	 * invoked for creating a different response that reports a status code.
	 * 
	 * 
	 * Same comment applies to the PUT, DELETE and GET APIs below.
	 */
	@POST
	@RolesAllowed({"ADMIN"})
	@Consumes(MediaType.APPLICATION_JSON)
	public Response add(Record record) throws URISyntaxException {
		System.out.println(record.toString());
		int newRecordId = dao.addRecord(record);
		URI uri = new URI("/records/" + newRecordId);
		System.out.println(newRecordId);	
		//created(uri) returns a new ResponseBuilder object for the created resource which sets the location of the new resource through its URI parameter
		//build() returns a response instance from the current ResponseBuilder (i.e. the one returned by created(uri))
		return Response.created(uri).build();
	}
	
	@PUT
	@RolesAllowed("ADMIN")
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response update(@PathParam("id") long id, Record record) throws URISyntaxException {
		record.setRecordId(id);
		if (dao.update(record)) {
			return Response.ok().build();
		} else {
			return Response.notModified().build();
		}
		//created(uri) returns a new ResponseBuilder object for the created resource which sets the location of the new resource through its URI parameter
		//build() returns a response instance from the current ResponseBuilder (i.e. the one returned by created(uri))
	}

	@DELETE
	@RolesAllowed("ADMIN")
	@Path("{id}")
	public Response delete(@PathParam("id") Long id) {
		if (dao.delete(id)) {
			return Response.ok().build();
		} else {
			return Response.notModified().build();
		}
	}
//	
//	//API to get  product
//	@GET
//	@Path("{id}")
//	@Produces(MediaType.APPLICATION_JSON)
//	public Response get(@PathParam("id") int id) {
//		Product product = dao.get(id);
//		if (product != null) {
//			//ok(product, MediaType.APPLICATION_JSON) returns a new ResponseBuilder object with the supplied status and a representation
//			//of the object that we are getting
//			return Response
//					.ok(product, MediaType.APPLICATION_JSON)
//					.build();
//		} else {
//			//status(Response.Status.NOT_FOUND) returns a new ResponseBuilder object with the supplied status
//			return Response.status(Response.Status.NOT_FOUND).build();
//		}
//	}

}
