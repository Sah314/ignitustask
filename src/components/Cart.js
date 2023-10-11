import {React,useState,useRef,useEffect} from 'react';
import { Itemspurchased } from '../features/Cartslice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './Cart.css'; 
import {BigNumber, Contract,providers,utils} from "ethers";
//import {  } from 'web3';
import Web3Modal from "web3modal";
import {abi, CONTRACT_ADDRESS} from "../constants";


const Cart = () => {
  
const [walletConnected,setWalletConnected] = useState(false);
const [loading,setLoading] = useState(false);
const [bought,setbought] = useState(false);
const web3ModalRef = useRef();


const getProviderorSigner = async (needSigner = false) => {
  const provider = await web3ModalRef.current.connect();
  const web3Provider = new providers.Web3Provider(provider);
  const { chainId } = await web3Provider.getNetwork();
  if (chainId !== 11155111) {
    window.alert("Change the network to Sepolia");
    throw new Error("Change network to Sepolia");
  }
  if (needSigner) {
    const signer = web3Provider.getSigner();
    return signer;
  }
  return web3Provider; 
}

  const dispatch = useDispatch();
  let totalcost = 0;
  const cartitems = useSelector((state) => state.cart);

  if (cartitems.length !== 0) {
    totalcost = cartitems.reduce(
      (accumulator, currentItem) => accumulator + currentItem.cost,
      0
    );
  }
  
  const handleBuyitems = async() => {
    dispatch(Itemspurchased(cartitems));
    const signer = await getProviderorSigner(true);
   // const gasPrice = await signer.getGasPrice(); // Get the gas price from the provider
    const transferContract = new Contract(CONTRACT_ADDRESS,abi,signer);
   // const estimatedGasLimit = await transferContract.estimateGas.transferToOwner(costInWei);
const tx = await transferContract.transferToOwner({value:utils.parseEther(totalcost.toString())});   
setLoading(true);
      await tx.wait();
      setbought(true);
    alert("items have been bought");
  };

  const connectWallet = async()=>{
    
    try{await getProviderorSigner();
    setWalletConnected(true);
  }
  catch(err){
    console.error(err);
  }
};


  useEffect(() => {
    
    if(!walletConnected){
      web3ModalRef.current = new Web3Modal({
        network:"goerli",
        providerOptions:{},
        disableInjectedProvider:false,
      });}
    connectWallet();
  }, [walletConnected])


  return (
    <div className="cart-container">
      {cartitems.map((obj) => (
        <div className="cart-item" key={obj.imgpath}>
          <img src={obj.imgpath} alt="" className="cart-image" />
          <div className="cost">{obj.cost} ETH</div>
        </div>
      ))}
      <div className="cart-total">
        Total Cost: {totalcost} ETH
      </div>
      {
        loading && (<button disabled="disabled" className="buy-button">Loading...</button> )
      }
      {!loading &&(<button onClick={handleBuyitems} className="buy-button">
        Buy items
      </button>)}
      <Link to="/" className="go-home-link">
        Go to Homepage
      </Link>
    </div>
  );
};

export default Cart;
