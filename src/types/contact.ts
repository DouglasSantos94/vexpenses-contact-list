import { Address } from "./address"
import { PhoneNumber } from "./phoneNumber"

export type Contact = {
  id: string,
  name: string,
  addresses: Address[],
  phoneNumbers: PhoneNumber[]
}