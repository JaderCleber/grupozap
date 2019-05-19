export default interface IAddress {
  city: string,
  neighborhood: string,
  geoLocation: {
    precision: string,
    location: {
      lon: number,
      lat: number,
    }
  }
}