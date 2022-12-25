'use client';
import { useState } from 'react';
import { ethers, Wallet } from 'ethers';
import Confirm from './confirm';
import Link from 'next/link';
import { useEffect } from 'react';

const EXTRA_WORDS = [
  'buy',
  'orange',
  'sail',
  'tent',
  'like',
  'potato',
  'ocean',
  'travel',
];
type MnemonicProps = {
  mnemonic: string;
  allWords: string[];
};

function CreateWallet() {
  const [newWallet, setNewWallet] = useState<Wallet | undefined>();
  const [words, setWords] = useState<string[]>([]);
  const [inConfirmStep, setInConfirmStep] = useState(false);

  const generateNewWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    const mnemonic = wallet.mnemonic.phrase;
    const mnemonicArray = mnemonic.split(' ');
    EXTRA_WORDS.map((word) => {
      mnemonicArray.push(word);
    });
    setNewWallet(wallet);
    setWords(mnemonicArray);
  };

  return (
    <div>
      <div className="m-11 flex justify-center">
        <p className="text-center">
          Welcome to Fracty Wallet.
          <br /> Everytime you access your wallet, you will be required to enter
          a mnemonic phrase.
          <br /> This information should be saved somewhere safe.
          <br /> You will be asked to confirm the Mnemonic so please write it
          down.
        </p>
        <br/>
      </div>
      {!inConfirmStep && !newWallet && (
      <button
            className="p-3 flex justify-center w-full rounded-lg mt-7 bg-stone-400 hover:bg-stone-600 hover:text-white"
            onClick={generateNewWallet}
          >
            Generate Wallet
          </button>
      )}
      {!inConfirmStep && newWallet && (
        <>
          <div className="mt-1 flex justify-center text-green-500">
            Mnemonic:
          </div>
          <div className="flex justify-center">{newWallet.mnemonic.phrase}</div>
          <div className="mt-1 flex justify-center text-green-500">
            Associated Ethereum Address:
          </div>
          <div className="mt-1 mb-3 flex justify-center">
            {newWallet.address}
          </div>
          <button
            className="p-3 flex justify-center w-full rounded-lg mt-7 bg-stone-400 hover:bg-stone-600 hover:text-white"
            onClick={() => setInConfirmStep(true)}
          >
            Finalize New Wallet
          </button>
        </>
      )}

      {inConfirmStep && newWallet && (
        <>
          <Confirm mnemonic={newWallet.mnemonic.phrase} allWords={words} />
        </>
      )}
    </div>
  );
}

export default CreateWallet;
