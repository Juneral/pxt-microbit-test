
//% color="#31C7D5" weight=10 icon="\uf1d0"
namespace JunBit {

  enum LED {
    //% block="ON"
    ON = 1,
    //% block="OFF"
    OFF = 0,
}
  //% blockId=SetLed block="LED at %pin| is %status"   group="LED"
  //% weight=70
  //% subcategory="Display"
  export function SetLed(lpin: DigitalPin, status: LED): void {
      pins.digitalWritePin(pin, status)
  }
}
