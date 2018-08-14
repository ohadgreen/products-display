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
}

export default new IcecatService();