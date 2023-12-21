"use client"

import React, { useState, useEffect, useRef, createFactory, useCallback } from 'react'
import { ethos, TransactionBlock } from 'ethos-connect'
// import { NFT_CONTRACT } from '../../client/config'
import { BsArrowRight } from 'react-icons/bs'
import { useRouter } from 'next/navigation';
import {
    ConnectButton,
    useAccountBalance,
    useWallet,
    SuiChainId,
    ErrorCode,
    formatSUI
} from "@suiet/wallet-kit";

const NFTform = () => {
    const router = useRouter();
    const wallet = useWallet();
    const [nftObjectId, setNftObjectId] = useState('');
    const [nftName, setNftName] = useState('');
    const [nftDescription, setNftDescription] = useState('');
    const [nftImage, setNftImage] = useState('');
    const [nftPrice, setNftPrice] = useState('');
    const [nftAmount, setNftAmount] = useState('');

    const onFormSubmit = async (event) => {
        event.preventDefault();

        console.log(nftName, nftDescription, nftImage, nftPrice);
        console.log("wallet", wallet);
        console.log("wallet", wallet?.account?.address)
        if (!wallet?.account?.address) return;
        // try {
        //     const transactionBlock = new TransactionBlock();
        //     transactionBlock.moveCall({
        //         target: `${NFT_CONTRACT}::nft::mint_to_sender`,
        //         arguments: [
        //             transactionBlock.pure(nftName),
        //             transactionBlock.pure(nftDescription),
        //             transactionBlock.pure(nftImage),
        //             transactionBlock.pure(nftPrice)
        //         ]
        //     })

        //     const response = await wallet.signAndExecuteTransactionBlock({
        //         transactionBlock,
        //         options: {
        //             showObjectChanges: true,
        //         }
        //     });

        //     if (response?.objectChanges) {
        //         const createdObject = response.objectChanges.find(
        //             (e) => e.type === "created"
        //         );
        //         if (createdObject && "objectId" in createdObject) {
        //             setNftObjectId(createdObject.objectId)
        //         }
        //     }
        //     window.my_modal_3.showModal();

        // } catch (error) {
        //     console.log(error);
        // }
    }

    const nameHandler = (event) => {
        setNftName(event.target.defaultValue);
    }

    const descriptionHandler = (event) => {
        setNftDescription(event.target.defaultValue);
    }

    const imageHandler = (event) => {
        // do ipfs upload here and set the image url to nftImage
        setNftImage(event.target.defaultValue);
    }

    const priceHandler = (event) => {
        setNftPrice(event.target.defaultValue);
    }

    return (
        <div>
            {/* create nft form  */}
            <div className="flex flex-col items-center justify-center">
                <div className="w-full pt-5 max-w-lg">

                    <form >
                        <div className=" flex flex-col text-left mb-6">
                            <label htmlFor="text" className=" mb-2 text-lg font-medium text-white dark:text-white">Enter NFT Name</label>
                            <input type="text" id="input-name" defaultValue={nftName} onChange={nameHandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Bored Ape Yacht Club" required />
                        </div>
                        <div className=" flex flex-col text-left mb-6">
                            <label htmlFor="text" className=" mb-2 text-lg font-medium text-white dark:text-white">Enter NFT Description</label>
                            <input type="text" id="input-name" defaultValue={nftDescription} onChange={descriptionHandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Write about your collection details here" required />
                        </div>

                        <div className=" flex flex-col text-left mb-6">
                            <label htmlFor="text" className=" mb-2 text-lg font-medium text-white dark:text-white">Paste Image URL for NFT</label>
                            <input type="text" id="input-name" defaultValue="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" onChange={imageHandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>

                        <div className=" flex flex-col text-left mb-6">
                            <label htmlFor="text" className=" mb-2 text-lg font-medium text-white dark:text-white">Enter NFT Price</label>
                            <input type="number" id="input-name" defaultValue={nftPrice} onChange={priceHandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="0.1 SUI" required />
                        </div>

                        <button onClick={onFormSubmit}
                            className="flex justify-start relative text-lg px-8 py-3 bg-[#98ee2c]  mr-5 uppercase font-Agda font-bold text-black hover:bg-[#f0f0f0] cursor-pointer" >
                            Mint NFT Event
                            <BsArrowRight className='mt-1 ml-2' />
                        </button>

                        {/* <div className="mb-6">
                            <label htmlFor="tokens" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Amount To Transfer</label>
                            <input type="tokens" onChange={amountHandler} id="input-amount" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="0 ETH" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Verfication Code</label>
                            <input type="number" id="input-otp" onChange={aHandler}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Code" required />
                        </div> */}
                        {/* <div className="flex items-start mb-6">
                                    <div className="flex items-center h-5">
                                        <input id="terms" type="checkbox" defaultValue="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Verifying <a className="text-blue-600 hover:underline dark:text-blue-500">Transaction</a></label>
                                </div> */}
                        {/* <button type="submit" onClick={naiveProve}
                            disabled={otpDisable} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Send
                        </button> */}
                    </form>

                    <dialog id="my_modal_3" className="modal">
                        <form method="dialog" className="modal-box">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => { router.push('/event') }} >✕</button>
                            <h3 className="font-bold text-lg">🎉 PlayVerse NFT Minted 🎉</h3>
                            <p className="py-4">Create Your NFT Based Event Now</p>
                        </form>
                    </dialog>

                </div>
            </div>
        </div>
    )
}

export default NFTform