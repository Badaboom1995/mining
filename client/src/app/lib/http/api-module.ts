


import { routingService } from "../../services/routing/routing";
import { API_URL } from "../../constants";
export class ApiModule {
	/**
	 * @protected
	 * @memberof ApiModule
	 */
	protected baseUrl = API_URL;


	/**
	 * Encode object ot URI
	 */
	public static encodeToURI = (target) => Object.keys(target)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(target[key]))
		.join('&');

	/**
	 * Check is authorized and redirect if not
	 */
	protected checkIsAutorized(response) {
		if (response.status == 401) {
			routingService.push('/auth/login');
			return false;
		}
		return true;
	}

	/**
	 * Boostrap form data from object
	 */
	protected bootstrapBody(params : object) {
		const body = new FormData();
		Object.keys(params).map(key =>  body.append(key, params[key]));
		return body;
	}
	/**
	 * Send request with params
	 * @memberof ApiModule
	 */
	protected request = async (url: string, params = {}, options = { method : 'POST', useFormData: false }): Promise<any> => {

		
		const fetchOptions: any = {
			method: options.method || 'POST',
			body: options.useFormData ? this.bootstrapBody(params) : ApiModule.encodeToURI(params),
			headers: {
				'Content-Type': options.useFormData ? 'multipart/form-data' : 'application/x-www-form-urlencoded;charset=UTF-8',
				// 'Authorization': 'Bearer ' + TOKEN
			},
			mode: 'no-cors'
		};


		return new Promise( async (resolve, reject) => {
			
			try {
				const response = await fetch(this.baseUrl + url, fetchOptions);
				if (this.checkIsAutorized(response)) {
					const res = await response.json();
					if (res.success) return resolve(res);
					reject(res)
				}
			} catch (response) {
				this.checkIsAutorized(response);

			}
			return fetch(this.baseUrl + url, fetchOptions)
				.then(async response => {
					this.checkIsAutorized(response);
					const res = await response.json();
					if (res.success) return resolve(res);
					reject(res)
				}).catch(async response => {
					this.checkIsAutorized(response);
					reject({
						success: false,
						content: {},
						message: response.message
					});
				});
		});
	}
	

}




