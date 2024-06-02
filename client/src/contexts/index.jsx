import React, { useContext, createContext } from 'react';
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    '0xC11a4536B2F7e36791845F80A6e44DA113843fE4',
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    'createCampaign',
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    const data = await createCampaign([
      address,
      form.title,
      form.description,
      form.target,
      new Date(form.deadline).getTime(),
      form.image,
    ]);

    console.log('data', data);
  };

  return (
    <StateContext.Provider
      value={{ address, createCampaign: publishCampaign, contract }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
