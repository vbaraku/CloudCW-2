package city.org.rs;

import javax.ws.rs.core.Feature;
import javax.ws.rs.core.FeatureContext;
import javax.ws.rs.ext.Provider;

import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;

@Provider
public class App implements Feature {
    @Override
    public boolean configure(FeatureContext context) {
    	context.register(SecurityFilter.class);
        context.register(RolesAllowedDynamicFeature.class);
        //context.register(CORSResponseFilter.class);
        return true;
    }
}