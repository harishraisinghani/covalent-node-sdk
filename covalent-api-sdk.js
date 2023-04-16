const axios = require('axios');

class CovalentAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.covalenthq.com/v1';
  }

  async makeRequest(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  async getERC20TokenBalances(chainId, address) {
    const endpoint = `${this.baseURL}/${chainId}/address/${address}/balances_v2/?key=${this.apiKey}`;
    return this.makeRequest(endpoint);
  }

  async getNFTBalances(chainId, address) {
    const endpoint = `${this.baseURL}/${chainId}/address/${address}/balances_nft/?key=${this.apiKey}`;
    return this.makeRequest(endpoint);
  }

  async getTokenBalances(chainId, address) {
    const endpoint = `${this.baseURL}/${chainId}/address/${address}/balances_v2/?nft=true&key=${this.apiKey}`;
    return this.makeRequest(endpoint);
  }

  async getERC20TokenTransfers(chainId, address, contractAddress, startingBlock=0, endingBlock='latest' ) {
    const endpoint = `${this.baseURL}/${chainId}/address/${address}/transfers_v2/?contract-address=${contractAddress}&starting-block=${startingBlock}&ending-block=${endingBlock}&key=${this.apiKey}`;
    return this.makeRequest(endpoint);
  }

  // Add more methods here based on the Covalent API documentation
}

module.exports = CovalentAPI;
