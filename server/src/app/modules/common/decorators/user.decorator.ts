import { createRouteParamDecorator } from "@nestjs/common";





export const SessionUser = createRouteParamDecorator((data, req) => {
	return req.user;
});