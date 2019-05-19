import IAddress from './IAddress';
import IPricingInfos from './IPricingInfos';

export default interface IImmobile {
  usableAreas: number,
  listingType: string,
  createdAt: string,
  listingStatus: string,
  id: string,
  parkingSpaces: number,
  updatedAt: string,
  owner: boolean,
  images: string[],
  address: IAddress,
  bathrooms: number,
  bedrooms: number,
  pricingInfos: IPricingInfos
}