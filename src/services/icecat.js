import _ from 'lodash';

const ICECAT_ENDPOINT = 'http://localhost:5000';

class IcecatService {
    async getDomainsByLocale(locale) {
        const url = `${ICECAT_ENDPOINT}/domains/${locale}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Icecat service call for domains failed: ${response.status}`);
        }
        const data = await response.json();
        const domainsArray = _.map(data, 'DOMAIN');
        // console.log("service domains array ", domainsArray);

        return domainsArray;        
    }

    async getProductsByDomain(domain) {
        const url = `${ICECAT_ENDPOINT}/productsdata/${domain}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Icecat service call for products data failed: ${response.status}`);
        }
        const data = await response.json();       
        return data;
    }
}

export default new IcecatService();