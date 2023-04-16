const CovalentAPI = require('../covalent-api-sdk');

const covalent = new CovalentAPI('ckey_devtest');

describe('Covalent API SDK Class A Tests - Live Data', () => {
	const testWallet = '0xfC43f5F9dd45258b3AFf31Bdbe6561D97e8B71de' // demo.eth
	const testContract = '0xdAC17F958D2ee523a2206206994597C13D831ec7' //USDT on Ethereum Mainnet

	test('getERC20TokenBalances', async () => {  
		const response = await covalent.getERC20TokenBalances(1, testWallet);
		expect(response).toHaveProperty('data');
		expect(response.data.items.length).toBeGreaterThan(120);
	});

	test('getNFTBalances', async () => {  
		const response = await covalent.getNFTBalances(1, testWallet);
		expect(response).toHaveProperty('data');
		expect(response.data.items.length).toBeGreaterThan(10);
	});

	test('getAllTokenBalances', async () => {  
		const response = await covalent.getAllTokenBalances(1, testWallet);
		expect(response).toHaveProperty('data');
		expect(response.data.items.length).toBeGreaterThan(130);
	});

	test('getERC20TokenTransfers', async () => {  
		const response = await covalent.getERC20TokenTransfers(1, testWallet, testContract);
		expect(response).toHaveProperty('data');
		expect(response.data.items.length).toBeGreaterThan(90);
	});

	/* TODO:
		- Loop through multiple chains
		- Add remaining Class A methods

	*/

});
