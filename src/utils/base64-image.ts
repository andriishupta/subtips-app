import makeBlockie from 'ethereum-blockies-base64'

export const getProfileImagePlaceHolder = (address = '0x0') => makeBlockie(address)