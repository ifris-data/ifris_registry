package io.github.ifris.registry.client;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import io.github.ifris.registry.security.oauth2.AuthorizationHeaderUtil;

public class TokenRelayRequestInterceptor implements RequestInterceptor {

    public static final String AUTHORIZATION = "Authorization";

    @Override
    public void apply(RequestTemplate template) {
        template.header(AUTHORIZATION, AuthorizationHeaderUtil.getAuthorizationHeader());
    }
}
