'use client';
import React from 'react';
import { useState, useMemo } from 'react';
import type { Key, ChangeEvent } from 'react';
import { ethers } from 'ethers';
import Link from 'next/link';

// lunch chief dolphin glow tenant rice spoil embody rescue bean timber cousin
// 0x007e14dFfE15dCa1DDE220A5A60BbF376E72c906

interface Mnemonic {
  raw: string;
  array: string[];
}

function ImportWallet() {
  const [mnemonic, setMnemonic] = useState<Mnemonic>({ raw: '', array: [] });
  const [wallet, setWallet] = useState<ethers.Wallet | undefined>();

  function captureImport(input: ChangeEvent<HTMLInputElement>) {
    const inputString = input.currentTarget.value.toString();
    const inputArray = inputString.split(' ');
    setMnemonic({ array: [], raw: inputString });
    if (inputArray.length >= 12) {
      setMnemonic({ array: inputArray, raw: inputString });
      try {
        const wallet = ethers.Wallet.fromMnemonic(inputString);
        setWallet(wallet);
      } catch (e) {
        console.log(e);
        setWallet(undefined);
      }
    }
  }

  const mnemonicItems = useMemo(() => {
    if (mnemonic) {
      return mnemonic.array.map((word: string, indx: number) => (
        <>
          <span className="font-semibold underline text-gray m-5 mb-2 justify-center">
            {indx + 1}.{' '}
          </span>
          <span className="" key={indx}>
            {word}
          </span>
          {(indx + 1) % 3 == 0 ? <br /> : ''}
        </>
      ));
    } else {
      return undefined;
    }
  }, [mnemonic]);

  return (
    <div>
      <h3 className="m-1 flex justify-center">
        Please enter your Mnemonic phrase below to import your wallet
      </h3>
      <div className="m-11 mt-3 flex justify-center">
        <label hidden htmlFor="importWallet">
          Import Wallet Phrase
        </label>
        <input
          id="importWallet"
          type="text"
          maxLength={500}
          minLength={1}
          value={mnemonic.raw}
          placeholder="Enter your mnemonic phrase...."
          onChange={(e) => captureImport(e)}
          className="p-4 height-50px ml-5 w-96 border-double border-4 border-sky-500"
        />
      </div>
      {mnemonicItems && mnemonicItems.length >= 12 && (
        <>
          <div className="flex justify-center">{mnemonicItems}</div>
          <div className="mt-5 flex justify-center">
            Associated Ethereum Address:
          </div>
          <div className="justify-center mt-5">{wallet?.address}</div>
          <Link
            href={`/connect/${wallet?.address}`}
            className="p-3 rounded-lg mt-7 bg-stone-400 hover:bg-stone-600 hover:text-white"
          >
            Finalize Connection
          </Link>
        </>
      )}
    </div>
  );
}

export default ImportWallet;
