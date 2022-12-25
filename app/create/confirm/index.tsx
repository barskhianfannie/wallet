'use client';
import React from 'react';
import { useState } from 'react';
import {ethers} from 'ethers';
import { useRouter } from 'next/navigation';


type ConfirmProps = {
  mnemonic:string;
  allWords:string[];
};

function Confirm({mnemonic, allWords}: ConfirmProps) {

  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const router = useRouter();

  const handleWordSelection = (word: string) => {
    console.log(word)
    selectedWords.push(word);
    setSelectedWords(selectedWords);
    const selectedWordsString = selectedWords.join(" ");
    if(selectedWordsString===mnemonic){
      const wallet = ethers.Wallet.fromMnemonic(selectedWordsString)
      router.push(`/connect/${wallet.address}`)
    }
  };

  const resetWordSelection = () => {
    setSelectedWords([]);
  };

  const mnemonicItems = () => {
    if (mnemonic) {
      return allWords.map((word: string, indx: number) => (
        <>
          <button
          key={indx}
            disabled={word in selectedWords}
            className="p-3 rounded-lg mt-7 ml-3  bg-stone-400 hover:bg-stone-600 hover:text-white"
            onClick={()=>handleWordSelection(word)}>
            <span key={indx}>
              {word}
            </span>
          </button>
          {(indx + 1) % 5 == 0 ? <br /> : ''}

        </>
      ));
    } else {
      return undefined;
    }
  };

  const  formattedChosenWords = selectedWords.map((word: string, indx: number) => (
    <span className='mr-3'>{word}</span>
    ))

  return (
    <div>
      <div>
        <button className="p-3 flex justify-end rounded-lg mt-7 bg-red-100 hover:bg-red-600 hover:text-white" onClick={()=>resetWordSelection()}>
          Reset
        </button>
      {formattedChosenWords}
        <br/>
        {mnemonicItems()}
      </div>
    </div>
  );
}

export default Confirm;
