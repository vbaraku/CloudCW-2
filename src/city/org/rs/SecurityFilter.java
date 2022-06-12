package city.org.rs;

import java.io.IOException;
import java.security.Principal;
import java.util.Base64;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Priority;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.ext.Provider;

//@Provider
@PreMatching
@Priority(Priorities.AUTHENTICATION	)
public class SecurityFilter implements ContainerRequestFilter {

	private static final String AUTH_HEADER = "Authorization";
	private static final String AUTH_HEADER_PREFIX = "Basic ";

	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {
		// TODO Auto-generated method stub
		List<String> authHeader = requestContext.getHeaders().get(AUTH_HEADER);

		if (authHeader != null && authHeader.size() > 0) {
			String authToken = authHeader.get(0);
			authToken = authToken.replaceFirst(AUTH_HEADER_PREFIX, "");
			String decoded = new String(Base64.getDecoder().decode(authToken));
			
			String[] userAndPass = decoded.split(":");
			if(userAndPass.length <2) {
				Response unauthorizedStatus = Response.status(Response.Status.UNAUTHORIZED).entity("user not authed").build();
				requestContext.abortWith(unauthorizedStatus);
				return;
			}
			String username = userAndPass[0];
			String password = userAndPass[1];
			SecurityContext originalContext = requestContext.getSecurityContext();
			Set<String> roles = new HashSet<>();
			Authorizer authorizer = null;
			if (username.equals("admin") && password.equals("admin")) {
				roles.add("ADMIN");
				System.out.println("admin");
				authorizer = new Authorizer(roles, "admin", originalContext.isSecure());
				requestContext.setSecurityContext(authorizer);
				return;
			} else if(username.equals("user") && password.equals("user")) {
				roles.add("USER");
				System.out.println("user");
				authorizer = new Authorizer(roles, "user", originalContext.isSecure());
				requestContext.setSecurityContext(authorizer);
				return;
			}
			
		}

		Response unauthorizedStatus = Response.status(Response.Status.UNAUTHORIZED).entity("user not authed").build();
		requestContext.abortWith(unauthorizedStatus);
	}

	public static class Authorizer implements SecurityContext {

		Set<String> roles;
		String username;
		boolean isSecure;

		public Authorizer(Set<String> roles, final String username, boolean isSecure) {
			this.roles = roles;
			this.username = username;
			this.isSecure = isSecure;
		}

		@Override
		public Principal getUserPrincipal() {
			return new User(username);
		}

		@Override
		public boolean isUserInRole(String role) {
			return roles.contains(role);
		}

		@Override
		public boolean isSecure() {
			return isSecure;
		}

		@Override
		public String getAuthenticationScheme() {
			return "Your Scheme";
		}
	}

	public static class User implements Principal {
		String name;

		public User(String name) {
			this.name = name;
		}

		@Override
		public String getName() {
			return name;
		}
	}
}
