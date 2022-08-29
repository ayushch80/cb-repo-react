import './css/App.css'
import './css/bootstrap.min.css'
import { ethers } from 'ethers';
import { detectEthereumProvider } from '@metamask/detect-provider';
async function connect() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner()
  const address = await signer.getAddress();
  document.getElementById('conn').innerText = "Connected to " + address.substr(0, 5) + "..." + address.substr(38)
}
connect();

export default function App() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md py-1"><div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#"><span>COIN BURN</span></a>
      <div id="navcol-5">
        <button className="btn btn-outline-success" onClick={connect}><span id="conn">Connect to Metamask</span></button>
      </div></div>
    </nav>
  )
}
