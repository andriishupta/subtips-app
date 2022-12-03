import { SubsocialApi } from '@subsocial/api';
import type { CreateSubsocialApiProps } from '@subsocial/api/types';
import { generateCrustAuthToken } from "@subsocial/api/utils/ipfs";

const ipfsToken = generateCrustAuthToken(
  'bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice' // todo ENV Private Crust Wallet
)

export const createSubsocialApi = ({
  substrateNodeUrl,
  ipfsNodeUrl,
}: Partial<CreateSubsocialApiProps> = {}) =>
  SubsocialApi.create({
    substrateNodeUrl: substrateNodeUrl || 'wss://rco-para.subsocial.network', // todo ENV vars
    ipfsNodeUrl: ipfsNodeUrl || 'https://crustwebsites.net',
  }).then((api) => {
    api.ipfs.setWriteHeaders({
      authorization: `Basic ${ipfsToken}`,
    });

    return api
  })
