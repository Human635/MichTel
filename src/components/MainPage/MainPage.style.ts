import styled from "styled-components";

export const ThemeHeader = styled.header`
  margin: 0;
  background-color: #fff;
  opacity: 0.95;
  display: flex;
  align-items: center;
  gap: 15vw;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 10000;

  .logo {
    h1 {
      margin: 0;
    }
    margin: 0;
    display: flex;
    margin-left: 30px;
    align-items: center;
    font-size: 30px;
  }
`;

export const ThemeToogleMain = styled.div`
  input[type="checkbox"] {
    visibility: hidden;
    &:checked + label {
      transform: rotate(360deg);
      background-color: #000;
      &:before {
        transform: translateX(27px);
        background-color: #fff;
      }
    }
  }

  label {
    margin: 0 auto;
    display: flex;
    width: 50px;
    height: 25px;
    border: 6px solid;
    border-radius: 50em;
    position: relative;
    top: -10px;
    left: -100px;
    transition: transform 0.75s ease-in-out;
    transform-origin: 50% 50%;
    cursor: pointer;

    &:before {
      transition: transform 0.75s ease;
      transition-delay: 0.5s;
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #000;
      border-radius: 50%;
      top: 2.5px;
      left: 3px;
    }
  }
`;

export const ThemeHomeSection = styled.section`
  padding: 70px 60px;
  background-color: #e6e6fa;
  border-radius: 12px;
  height: 100%;

  .Paris {
    position: absolute;
    width: 25vw;
    border-radius: 20px;
    border: 3px solid #9aceeb;

    top: 110px;
    left: -150px;
    animation: scaleUp 3s ease-in-out infinite;
  }

  .Venetsya {
    position: absolute;
    width: 25vw;
    border-radius: 20px;
    border: 3px solid #9aceeb;

    top: 0;
    right: -20px;
    animation: scaleUp 2s ease-in-out infinite;
  }

  .London {
    position: absolute;
    width: 25vw;
    border-radius: 20px;
    border: 3px solid #9aceeb;

    top: 300px;
    right: -20px;
    animation: scaleUp 4s ease-in-out infinite;
  }

  .shape {
    position: absolute;
    filter: drop-shadow(0px 3px 6px hsla(0, 0%, 0%, 0.1));
  }

  .shape-1 {
    top: 420px;
    right: 350px;
    animation: scaleUp 2s 3s ease-in-out infinite;
  }

  .shape-2 {
    right: 0;
    top: 160px;
    animation: scaleUp 3s 4s ease-in-out infinite;
  }

  .shape-3 {
    top: 330px;
    right: 450px;
    animation: scaleUp 3s 1s ease-in-out infinite;
  }

  .shape-4 {
    top: 15px;
    right: 350px;
    animation: moveUp 3s 1s ease-in-out infinite;
  }

  .shape-5 {
    top: 80px;
    right: 470px;
    animation: moveUp 3s ease-in-out infinite;
  }

  @keyframes scaleUp {
    0%,
    100% {
      transform: translateY(0) scale(1);
    }

    50% {
      transform: translateY(-5px) scale(1.05);
    }
  }

  @keyframes moveUp {
    0%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-3px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  display: grid;
  grid-template-areas:
    "main menu"
    "main menu";

  . home-left {
    grid-area: main;
  }

  .home-right {
    grid-area: menu;
    position: relative;
  }

  .home-left {
    text-align: start;
  }

  .home-subtext {
    background: hsl(220, 13%, 95%);
    color: hsl(249, 37%, 19%);
    font-size: 18px;
    display: inline-block;
    padding: 3px;
    margin-bottom: 30px;
  }

  .main-heading {
    color: hsl(249, 37%, 19%);
    font-size: 30px;
    display: flex;
    flex-wrap: wrap;
    font-weight: 600;
    line-height: 2.1;
    letter-spacing: -2px;
    margin-bottom: 30px;
  }

  .home-text {
    color: hsl(240, 9%, 51%);
    margin-bottom: 40px;
    line-height: 1.6;
  }

  .btn-icon {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 130px;
    position: relative;
    left: -175px;
    margin-bottom: 20px;
  }
  margin-bottom: 100px;
`;

export const ThemeCard = styled.div`
  width: 300px;
  height: 400px;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  &:hover{
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0,0,0,0.2);
  }
  
  .container{
    width:100%;
    height:100%;
    .top{
      height: 80%;
      width:100%;
      background: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcZGhkcGRkZGhwdIBobGSAZGRkcGRoaICwjGhwoIRoXJDUkKC0vMjIyGSI4PTgwPCwxMi8BCwsLDw4PHBERHTMoIigxMTExMTExMTExMTExMzExMTExMTExLzExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIARMAtwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAD0QAAIBAwMCBQIEAwYGAgMAAAECEQADIQQSMQVBEyJRYXEGMhRCgZEjobEzYsHR4fAVNFJykvEWJAdDgv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACkRAAICAgICAQQBBQEAAAAAAAABAhEDIRIxE0FRBCJhcZEygbHh8CP/2gAMAwEAAhEDEQA/ALBpup/h2CESGNWDerHjmq3r9OLgPqOD3rvpuvKDbcmRwf8AOqOOgJheu6fuYlexBqQaUFSrcnv8cU40WoS4uInvUV+wA3zS2NRUNRoijx2qG/YNWbX6UFZ7iaVooNUjMlKBBokAxTIXNsAVB4Iom0i96zAkFEeXNL9TpQRBNTvqDHNLL94zzRimCTA9boUOI/X3pLdXaQJIJmMHMR/pT972JqK66AC2/la9i3gmShFxpPbAn5iq3SJcU2U3qBJaJyagt6R4DAGJ5PtV3fp9vHlzxNRN00FYjHoPT9KNIXYL9O9ON0tBHEFjmPgCmj9AuJc5BEcntUPQLotXRbKwoM+mff1qP6y63eRwbUbeCf8AD+fNBuSYyjFx2Lbl4JcIMEAkAgfzFEXdQ4tviB2zj9KrfSLty5cCFSxaTV2bo7m35iIp1JVsm4O9FTsh2gJMkxNS9O1R3lWHrL0xXTm3Kr6/rULhDKHB5+P86KQrIddcRTIz70x6BetsCTmP5TSHU2jBDRjI96K0FtUtgR5nOBntW7DVHovT9bZVcRJrK85fU3ElRx7VlS4Ip5GX7VJtJFAXaYuLbzDZ7fNLiCrANwe/pUkjosbdIYQSD+lNUfeoJquaYOpgZ+MU80OoBEGpyRRMN2A5qv8AWbQS5KiAasSsO1CdatBkBihF0wtWhDYeaOs2Sfikysbb7SOeKd2L+KoySNXLAFL9VoycxThYatuw4optAaTKx+EI+BJzxVW1f1C91rb7AnhyVAzO4fPp/Wrr9ROPw90Dk23j/wATXmaWNWQm3W3FRlQr/FdQAyoRgHA8xwB+X4pM03orgxp3qz0f6cT8RpxeIIbc4Kn8u0kAftB/WjfBKAsBkCgf/wAYK0atHuG4yPalzySySZJy0cSc49Iqz9S0sqQKaE20rEyY0m6KIfEvXNwkQTJ9+Kl1fS4Qm4R8TxOZ+aco9uyu0wDPAoTw0uuc+UkSfir3/Bz8QT6R6MGZ7m3Ewnr/AOqulzQnbHtxU3T0t27Y2xAHaiV1KHvUZSbZaMUkVDX9P25jPJqsa/prtcDDGZPxXqDhGnjNCanQIylVIU00cnyCWNM8y1nSzccbee/xRDdL8MqfuYHv2+Kvmh6SlvzHzMe9RanRIzY70/kVk/Foo17TM5LNA+BWVdk6EOTmso+RA8TKvY1TLxRb6sXF8xhhxAqHXacIAQpH++9D6R4cGYrUmrDbTpjjprmRJ47nmjtVr0QAgc8/rQNq4Cx2sMj9aE/DM4II3Qai4pvZZN1ocaHrY3Qcj1qzWodc8GvP00DpDgEEZirRoeogAAnPelnFeh4t+xZ9SWjbdWAxPNCabVHJp71l0uJtPrivP9bqnS4VJiD+9UhTVEslp2Wt9SQPKc1GuquTMSPb/Gq7pdUztE49asem1MKQ4+IqvGiXKzjWOHQyBBEEex5Bqk6+yEN9VJAtLaVfPOwKbacfnBH5Rle/erM9xmPlHNVjWNNzWHy/eSIwf7ZZNn1Pcmub6lUkdX0srbPRPpB0tWFYLD3Qly4xbcWJRQNzdyBj5nvNOLutVsTVY6ID+Ds9vJHHoSBPvABPzXb3Sg3EiB3pscE4pk8s2pMj6paTcTyaX2NQEwJz6mhBrXuu20HBgtniiLdkk7+3Ee9dMVo5ZT3omsdee2fDufbkgj59KYWuuowbbJjH61XNXpt0iR7n0rWhti2IHrW8abB5GixafqbqcnnmmKdRLfrVZe7mKLta0AiImhLGNHL8lxsX12Y/nQD6gC4BillnqBJIPaoy7Fp4qSx0W8ia0WltUsZP6VlJPEAABP71lLwG5hWv0/laFBMcVR9T5WzzXpe4EYFKNZ0xGJYKN3rS48nHspkx8uimWNWyNK80ws9bb0APrR+k+mvOTc+3sBjPzWN9Lgs3mKr2HMc+tUc4PslHHNdAOt6wCMGW9v8AeKXaTqDO8HGatVn6RUqQSfnv/lROn+nVtjCifX/3Sc4LofhNvZW7/WGRtpBMVu69t/NctjcRE+x7x2qzH6bW5/aER2A5/eoeo/TyFQEOwr3jkelGM4AlCRWtNpVWNjT6zTa1pAzKSZEZE1Xdbvt3PDGT2I71La6m6HODXR2tHNdPZddPaUEQBiPSvKkuFhqG8hnazZHlLXLbHwc5GZxOPbNXHT9SZnBOe+0TmBMY9YqlaRV8NwVJAt29hnFqLlow3ZsxicATMzXH9RGmrO36WXJNoun0ncnR2s4G8DiSN0gtHc7p+COeaJ1OmJEkFl/lVe6FqmXTDzbj4lyXBJDEi2cT2E+g98zTK7c1dy3vtgOB2nJ9gI55xXRiX2JnLmf/AKONBum1arKrbA7VHrLogyB7DAzSW3pNWUuXGUqyqGC8E/y9jSN+r3HJ3NB9DVLjZJqVDXW6o9sL/WutPrQwE/FVu7qnbkyPWum1EjExHFHmK4aGGr6gxJCmFoVNc4I8xqBGmu1sHmMetC2w0kNNB1tlJn9CTTbT9RLZqvaXSS2Jxyew9KJuoy4mB7Uyv2I2vRY36hu7x8VlVqwlzsTn1rdGvwa38nrlpqlRcn1rapFEBAc15R7ZyIjNYyCuNSgodtZGDQsFBqPtFZ+IFBnVKRzUD6gDvRsFDLxBWmcHmlaaiaI07zRAL9TolLyFx3NB6joqXRnBHBA/3NWnwwRxUR049IqkcjROWNPsomp6S9q3cubtoW25DGRB2kDj3Iqr2tPcVLwnbCqrrP8AaEXLWFA8p+OAfevSPrS4tvQ3twmQq/Jd1UT7SRxn0ryq0AiXTqJ3m2FAYAqqeJa2hxGEBII25EzPFJlm5vZTDjUI6GPTQWsGPKA6lUkkqGDAmTyCVAk58vxTT6e1lxLoWCUzntW/oG0xu3BeQkugYM0EMqEx5hhvvwR2mfb0G/0Oyyh7ahWE8d55Bq2PIlDizmy4W58kzjetyJ9KrvXvpiy6EqgDEzKjPx8U109tVZbbMd5BPP703XRg4OaVS4so4KS2ed6Holu5bh1AKKV79iT+hzzTHTdAt21ACgiBls++as3Vfp0XLZCMVPOO8dqqfVdJqrSkruZRznt6CuiOTl0zmlj4+rEnU9LO8+HsO7DTg59PegNHpWfBGKMsm/eBVbcgDn1z2980x6f0e8YUgLJAzzngR61ZNezmcZekQpYNtT2EevNAJqSVYETPenfVOg30fYcgxDfNDdU6MdNt3ZDYn45+Kbmn0K4SV2gGxomPmLbhGAO36VlH6MIZ2MQe81lPSEtl/bUzROnvYqttqiMGp7GtgV4p71ji9qJNC3re7IoQagGpE1NY1mn05HegrpaaaIhfNZe0Z5oii207AzTOxfHNa09tSIiuTYO/AxWMNbWoBE1Mbk4FJwCKO0VpiZrWYR/Wl0iwqhN5a9aXaO+ZH8wM9pmqZrrg8TUb1lztneDKOGtOwUAcLsMA5lRI7ta/r7cp0yqVE3QxL4VdsMCxPYED/c1Vg7pcvrvBNxtoIyXcWnZ1yTMRt9PtikkWiuh19K3GW5plOUYXbe5/uDbSxC4AKeTjMbQOIi76bS7QZac9vT3rzfoN50bS+HctlPF/iop3MpLFWDQSIBuSW4jbzzXpGq1GwU0WTmugfVJBkjjvUb9RCgZoTXdQkQZmkzvLY4pxS22uogihtVqh3EzSVdUysBtxTBrwYUyVCsQam+EckDYOSB35/bk1F0rxNy3MhWaZbvzB9uaZ9S6aXtnaYJHpNSfT9goSlwgqAAJ9R/SulTXE5ZRfI413X2S4qMQd2JHG75NKfrNWZbT/AHDufShPrm7aVRsYb932eg/r60kXqNy4gSYB5AwKeCWmiGST2md2NRt4rdTpYVFHeayr7ObRb/ALGmadIBXBz70vsXIbNOdNq1jNeQe4Lrui2wK0unIozVP3FDPfkRWBYRp7oFTm7NL0aM1njGtRrOrlxp8tcprzME1tL00Pq07jNGgWGW72fUU00upqt2CZzTLT3SOaFBsTfWDG5rdNbD+GFRyWMgAwxmQDGARMdxVe8wu2xbVwly86pG1QABaR3UJiCWdAeTvJ7UV1sC5rrpZiqLaEwYGAQZYHhgQu3uYnsCt61aFt7Qtb2VkVrbFVU21LE7iqiFmQvEhQScwaRl1oL01lhYHmUXbbhituAWC3BAc7RuY7YY9vQTV+1r7hzVB1ujULdtlnS7N3ftMY3EptgRc8jAYkgE5xFW7QuWtWi3PhpMZztE0UJLojezuEGZorQdKG6WNSWHUZIzR9rWCjYhFrunjBAjEUp1SG3nn4qzeKGFQ3unC5zxTpmZWh1QBW9exNUjU9cu+IQrA8yQTBz71YvqnprWruxJKsJUevY1VrmhZGgrE8zXbjiqtHn5Zu6fohtWzdO6Fk92NELYuL+XPaKm6PpSLskeUA+wHzVkfU2UAYgMwMj2I/rVEQexZpPpy467ncoPTvW6613V71wwmF9QKympm+0blqKs3cZoB3rXj15lHqWMn1HpUe6ghfrDdomsKe7W7d6g1ckxUzDbzWAEpczXbXZxQPiCpUuVjBFlc5o1BkULZIPNJNT9YaVWe2bsRKki27ichh5FIoN0MlYAly2L125c8xNwwviBR5pY4GbgDAHg5OB3qHrjG3dIKkllQHaVi15E3RBWWndMQIHrkL01GhCQNS3id7n4Z95gRAcr5cYkZjE0Xd65pCbjC+w3sWQDTt/C3Ek7D4fOeTPrzmpUW5f9Y+/CKiorMGuOqNMlNgZV3bmBIY7iWGOYECJLD6YQrp1Sd2xrizMmA7Ru9+36TVRHVtFKk6h/Ku0jwH8xE+bCDa0GMdhGaM6T9WaWxvBvm4HaTNq4COeDt4459KPTM6cey23TmutMhNRabVW71sXLbBkaYIMjBIOR7g1Mr7O9MTTGdmRyaMW/jBqv8A4rNFJqsc0A9jTV6e3dVdwkqZB7g/NKOr9PDISIkD0maIt6j0rWt1KASzAAetPCbTVCTgmnZUH2woYkD9pNdsloZCj9eKRdR1viXGgtsmVU9v8qk0l/1Br0ls8p6Y4VJ7CKygk1bE7UUk/vWVrGXXRO7zUcmobbetTI471wUd1nSmpRUS54rCxHahQbCRdUfNQ3tXNCkmaFvA0aBYb49G6aTmkSA0w019hWo1jqzcIxVU6r0QW7ly4VBN64WtAgkQFQvCrkszswAkCVM81ZdFLMMEzxQF/rrvqbtu2islqVLM7KGRVkMhB2ksZ8vOZzUsnRfFti3RdKVrjg2W2olxmQTvBRGZSScKrMAoBE5ziCR00oIJW2HGJZVYLblgpDy+SBk8CB5S1NH+q2t6a5c8NWYXLdoDc4Ukhrj95gbUyY+6IFAL9dXSN34dY7HxLkenM1JIs3FPsz/h6NY8QIBtuBWuQ/hlWUsCM7lyCvmzO2QoaQOekhzsFvY1xD4YM7g7JKkn7XQMQpI9cSATTPpf1hcum8j2dhSyboAd5bw2WRBI4VnP6dq5Xr9x7YupbQ29zAlXubpEbYt8yTuBnAImazQYuLGX0kdmisA48hJHuzMx/rReq14nFR6ceLatui7Qyg7R+Un7l/QzWWejO5gc+lXW1ZzNU6I7eqk0ytXABLfoKhtdCuAmFMr64n49a61awob7WBgg96KimzN0ga/1lrcjaP7vt80rbUPqLiox+4gD0z6jvTf8FbYSWA9ff4qPR2EF5DbVjtOSft78+lXTilpbISjOT29DJfotIBN0kn0UAULq/pg21YzMcY7D1q0+MEAaf0o23rEcdiO81HzS+S3gh8FR+lNCUY3HTBECefn2rKsOovLOIFZSyySbspHFFKjzplrlATRg0dzuIov8LCn1irUcwsS2feirNhj2oC7rHUxFEabrpT5pWFDD8EwyRipF6UD2mgv/AJETiJozRde9hQ2NoxejEGIo+10VRkijdN1FWiYpkl1G70ORuKK71N101proElR5RMST6fA3N/8AzVO1Nm2LVl1MrcA824qoCk3PIB9zfYDA/L81ZfqS5bvam3pdyhUbc/iEBSIljPJgeTgwzjHek+tFu7qmQKVtsy2lUd8wTbkzyWhsD1qM3Z0441oSfWOrQaazaVdrXAbrE4JLnbLen8O0v/kDWI14W7aAoyoE2qdU4UbAMhRAkwZzGf3K6my3tTatohNtrqWkPIK2ytkEH2UhiOIivWF0FsnCLzP2j/KjBaJz3I8nsah/xema8VYNusuTfa4xS8pQjMQveR781HavNcN23bBYrJCbyGR0mVFuICwGEqe8mvRP/wAg9PQdPutbVQ9prd0EAAjZcUtkf3S1UfVIPEF22rN4qrdZQoLNu/iMMEHYu58DM8zFLNbHx9Db6O16OWskqSm0koZAJncseoj9auK2RbYMjbvj/KvNtHqlsXfEZhtS4EUEQ5mCJM/xCQRjkZr0bXXFMFMAgHHJoxk6o2SKvkS3dSzjzAKff/KgdZpg9oo8FlMqwxIOR/iK41OrkeY/EUR0+5KkDM0VJpi0miu2um3HaEUn/CjPwr2FIb80H9vWrRp0SwMcnmq51rXb2NVeRvQiglsBfXMcHiox1B14NCPcWZmoL+qFLwTDzaHemW7dG4HH9fispTp+utbETispPGx/Ki9tatvnFA9Tt20Qnv2zQWicjLNj0motfq1Y449Kurs55VQGLRPYUBf6fb3EMse4OKPfUF8AfAAo/S6BiPNIPaRVHJVsgoyb+1lcT6fJPlbFTN9OkfnzVptdP2md0+1R3XZTkQPiRU7TeitNLZXbHTriHOR6inOni0huXHgLH3cFjhF+SYFV761u35Q6a66OASyr+YGe0Hzen/qk+iuay5bdb16/O8bZClQvAMFTJyZwccCpzn6Lwx3TLBptLbCvrb24OhfwnadoyTcKngZlfXynOaC0CAKdUzw1tSQBJ3XboNq2yA/3mLfoPeuF0l2HPj3X7IPCtkgA4aTbiZ4HoT3qHT6fVM4V3uG0xkzatZYbgGM24kTyf8aiy60ujPpzTL+O06qBFpdxE4Vgt1yYiZ3NaU16gNSRxXnGi6ffDsw1LIQTnw7aM6kwBuFr0RZ45FGvoNQA0dRbdI2ibZBUzMnwsEU6ZJxZbOr3jdsXbJE+JbuJ+rKQP5xXnXS9OLlmxd8pawWtsrTkPLJIHKwbsjnyiAezvRaS+bkv1C4i4I2+GT7/AHW8f60m1uiv22uLadjbJkkWbX8TaW2sw8PLZB/ehJ6saKptM71Bt3QjbVuOreGFLDyMpkMGGVGJgzG2O1W/oF3xLWwvudBBkQYJMEjsPQ94qk6u3qSqeZ380NNi0SYaASDbgAevvW7t3UJbuNau31vYk+FbAc5geVBIiOciKWLp2PLaqi467QvMgyKFtdWe3gIf2pH9G6rXXdXt1F24bYVoVgo3MRjhRMCT+1X+7pParKpHO7iym6/rt4/lYfpSDU9QuE5BHzXpY0vcikXVOj7iTHfFOoxElKRWE0lxk37lz2JihHtXO4NWK50O4QBGKI03Q9oy5n07U2hPuKxp9CzmA2fef8BWV6L0bp62yWjJ78fyrKFoPFkJUHvUb6YHjNEaa/tP2gz+9GXNWFggAHsJFK5UUUbF46ZcQb9sR680Ld6g/Ddvamza+4RJKj2oC4d7Sx+YzWUr7A4fAEmsYsOfSB3q46Dp42y4g/M/vS+wtpl2KNrDg95jmah1/VW0yS/mmQsHk+kc0s5oaGNt0Vr6+6VabVqysyOLaztaN7S20N24CifcUgtdEtlROougTlvE4biBn3/kKaXHNy4bjsm45YkMR3I3AACBIjOBB7gjrT9OBW2ivI3HLbyxmAUdiuUwVKwvYYIg8t27O9R4pKgVOhoAzm/dUf8A7CLhhMhgcf8AbH6mtjpduf8Amr24ArHiPlYK7vmDP6Ux6jsJ/D/iraeL/FVkdi5K+I1027gVktbYQKvMC53IIH01m3dIa3etOHsgqqpc2AKpsvcVDblb0K6icxAiOXUSfJX0Cjptvyxq7rZm3/Ef+Jw0e/B/Sa4/4Xbj/nLu2R5vEfDZXb+5H604TpDL4Tm6hFsKW8Rs3POXB1EoGdhKleIcTUQ6C2zwxfUHxI3bxuXaI8IHZAswSNkTBjgxQr8hTfwLP+Gp5idXdGCXHiN5Mhp5wMR+tdL05ZH/ANy7uhgFFx8plS4z2DA/tTa70dj4ri4kOGZQjSbf8Rbm7TgIWVyVljmXCkcYE1Vq3bJNy/bAt2fOjhtji4CiPcTw5e6d8HbxJ8okg7j+TOdegdekEqGXV3yASUbxHhzAO0mc5U/uajudIPm/+5f2giWNxvKc+U+buGn9B7U00Fobm041CPs/iXWL/wASXFs2dzbAlxSAyledpTgit3tB/azcCyTBXcGt5JAskIdn3MO/mYdznV+TKSe6BegdI26qy73rtwgyULtAIU7SQcEFlH7ir7fuMeMfNUZdLscNbdVhALawdilRsV4Cf2hAiQchSB9ph/Z6i11SVkkYIAOP9PQ8HkYquN+iOda5DVXgZahr1xT3pPqbtzkg0Et5ywAUkzx61ficnIsluzIxJmsfRR5iGxQd3quotqN9oqOxIxWL1lnwVilpj3EPsXkHesoOxpnbhT/T+tao0gWyW7pBGZoG500EzRTuWAhv5+vxUaqVM5JoIwHcsMg4xUlpbxXyOuBgQZo3duxFM9LoFA3M0e2O3NCQY/grc30Be46gDkk8VX+u6i7f+y4yuSRb2kBcYAZo7me/p8lv9UddVCGAdbQVofZ5WJkAyDuzBjHBMUm0ekt3FIu3GW3mLdtGGxSJIAA+5sk8RPqcSk7OqEeKFKnUqAhvXZGW2MSWbP5iQFAn1M8xVw6fY1FuxDP4d66y7TcAuhAMBGDNl2XceAowO1caPQaZLY1Nx4S0xjcZB8OACzZ3MpxA5Ig8VXuo9d1Go8T8OrWrQU77pIS5cgYlpAXv5FM+pOaSm+ijkoq2MRp9FpMEKH3m6itFx7VwxuCoPJbXaogM04XmKx+uuWFu1aRAS20XrgnzCAotIVAUjAJJAkmqn1TTXLaJtARbkqrAkM4UKXJDAMq574kH1o76d0FsWd1wXA9xS2zeCqySLV1UU5IhwfEMAvMU1P2R8i6ihs9/WsgK3LSTbJhEtjb4ZlhDBiBxtU5PYekV27rhu/8AuL+V8ohhHLANlckkA7fuHJAFS2dC12fCt3W580u4GIADki2CCp/MfvBM10/0VqHBJJEiCGuW5x/27h3bv6Vkn8BlNVpsjtazVgw72LnnCNKW5KmH2DaV80weee04oxOvSIvWwQxJIVwyMUO0rsuEgqMSAwEHHalN76G1CsrhGYAjEoQQDxIdW4A4HrQbaAW2C3rFwRsJy4YhDvfbIW55vKk+YASRnNHiIsrQ9XQaPWAm2VZi4ustsQz3MgeLZaCyDc07WHLZE4Y9TTUtpwyMbly2Tv8ABPhhwSQfDXdlkEYIgy0VRusXUtvbu2txVp3Synw2mdtl1hyEWAWYSSKtXQ+vuFV9RlQuL/LDzNuDoBDAbTJ+6JOZNK0ysJxf4Fnj6t1KpeuScpv3K08QxmCp9jjGKcfSmvv2Xdrl1muIASrAbWBPmQMcz8nmtavoFq03iWmXZduTAObakKzW7LQQwYSQewxHehdYttQTauE7Ad/iIykqcNuaIBxBiP8ACsFfDPWFvW9RaBEMjZ/36EUiu6YWjKW5g/cc81XPpTraibalhb8owjBVPAgkR6YqwMROHY/oaeLbIziokup1HiIFbjv/AKzQa3bK9wewikPXut7HNoSTiVHfu0n4/pVd6h1Dw0ufxJODbBTergwCJMAiGUz2M1zz+okpcYL+7Edez0dOoKIwZ9JrdeRarqbnaLjOqAt5lgNtP2DbIQxAHaM+1ZU+ef5X8A5R+Cy6PV3EFtiGg+bcdwCjMz4kckGODxAIinGm680xcTAbbMEk5IyAo29vWk928yA3ApuLCHaU3EycsX/NG0wYGBI7GtJt3MBbVi3mEA22xyAGOBAABmSxGfTjjOcb4ujWXDR9XsXCwBgqYMZg5EY4OOK31LUA22Fq4rdjuBgzgiZxHwZ4jvVI0yeY+Ipts4ZwiuTOZlgxCpBzEfsAJO0V1i+1gbY3HczwVIQxiW/MJ83E5zxXWvqZXUtoeFWENb3FYttdB2gDkArhrizEBefU+5onT6cG5ta34aIDcuXd35AfuIghmMbVHz6EVlu/culvCvq5wnh29q7pwqlzwsA/lOATjvr6q6hcFuzp7BAclfKq/fwAYM7VE78z9yd5rojOMlaLCfrV9tQzWyjJZshTsQg+HajyKw73GYgn5UetRPYtX0S14V+2tpgWMEO90wQqW5hLYlfMQTG2ImaLsaqzpyJuuQZa420N4jITsgNBaWO+ZIwB70I+tKJcuHU22uvCrtILJvkQ9wnyIFIwuAzHJqkaI5LbFF/TLrL4torjhVG2XIE72fMNcYwJnAk8KavnT/p61azdKsSZKk7lB9XLf2rxA3sIwIAqL6H6OLVo35k3ZFsgEDwlJAaPVyWaf+llFNdXeQGGZJ9GI7+xM0bSE4sbDrNhAAXWof8A5BbUElkOcARx2pFc6fa2k3Lip5toDAjzf9OVy3tQd3p9sNBA5gGCAYAJiQDInNHkhnGSV0WI/UyNgAH4qHVdbW4uy5bVlPIYBh7Y9felFnRKOIH7VMyhcFs494DGATHaaNpC7ZW/qL6ftujvZJEjzJknGQQRlwDnaZPueKR/Td1Efw7gaCYbZkmBiTGVg8+0Dk16glq1uZUuBmQ+YCSVwDDDbg5BzHNUj6y6ULOot37ZO24dsR9t5RKx7MAcdiDS2n0Nwkuwzp620ZunX1ufhrhDWnYFGtz5kZZ+wgz/AD95dsHZiLlqLlslXYsI8ow8YDhhnA5PApXftB0Vrt4blSBsTftCwwlgwBILEcgecgZNLesdbvi8UDsV27JIjERLZ8rCOPn1rlnnS1Hf+B+SpN9jTU9X0yNvNyJlSFlhIAYkwPMf73uPSm+m67ZELuBIAyR29c8j34qt6G2PDQrpwtst/EQyvK7SyF5BEESpBhSSO9BfTbKHuouklA+1rhfzW1YTbgt24XaGBgqSO1RUptOSb1+hXNvTNdebxLtw/YdwHMAbjzJGDDDBx5u4modIxfBRbihyTKlyv2APt4cclgcHbOSKadQuK7XFCkFSwCkS4x3lpn+8c5ov6at2027AB9y3jIIH3BSgXvyDI7ehqEcvbkTktlKfVBfEZhtkjgHcSSSJVscT8Ajvmsq09d6H4Y379yAhYLCQM7fMwEg5PsTHoTldEckWjcWcaDqS7bpZwUIaNp2mWwcIDmDJ9IHGZIZrZTcrgBbcmdokEm4CrTuBkkATOBnGZbfR7d1ku6S2gsstyEKtL3GAKsVkDAUjJGTx6IdR0gWrsv4ZtlZVEJITaQu0ljunDHOanL6fd9DcWhhsFs22kSQpaDLeGCTtlmLFiV5Ix29Knt2rjptuEEMwZjcYMtxEIYx5WgbVHOMweQQN0XQ2/GB1bGzbfyKTc2Mx2gHaZ5LSJXg7h2pm3S7ViEN9hduLcKW2VQTcS2jKCbRlxMDPMxVPBKrH4tNIzovTVTUoypttBrrkKW4hSSB2MBxPoIzNAF3K3dW5YXbgYwSF8PcxKj2KpgSY3BeMw40v1Etvp7OxD3dtxWdFAVGeRbIGTJBEg+npFa6ePEs+JFm+rtti6oKbmIKh1DSrHMSBAg1WMJql/I9V+ygdU19kkhCSNhEI0QAPICwndBHzkiRStH8sGTuyRxAOF/eZ/avSNfpfIoNvRWGG8bNPJJYsFVWSN2WByAQPMZpX1j6YXwrTtq7ab0woG4tdVQzhXOwbYOBmPXNdKRKVvZV+k9a1Ntx4b3WTuqEnHo2IjA9MVZL+ouOd9zcjzuZXlWVp3Z9O0zWtD9KXLLKqta3XHlLpuPm1gDyBdoPDTPLbZqx2Om3zafUrds3UugeV7buYcAbi0B18pHdongdknjcno0U62T6bqo1YtINniJe8VlBIyWLcRIXkzmj/AKitag2ncXbVsrcDcPd5AQoU2A8wZ/lVO6ZZ1FkXRbTTMHTwnKi8SHV3ykrCv5iPQBByeSm6hqbRNy7dtqn2lGsz5k2FiHJDMTP3f3uBGDx+Sik+jQ0Op8w/G2wzN209wgQIIEjjg/vVh+n1uhPNetXGaDbIV7eLRV4K7T2gfvVbX6n1DJu/DWHB/MpZQv5uQD5o5k9jHrXeg63feyu2zat2kOw3N0MYADBWKAGJEkEZIBImmasZQaZb1c27moB2h7rFtoYThIGPuIhSZgYqn9a1zX7TsywEJeCCPNJcxPoGIqSx1tiLqEAOV3qPERm8hZDBiEfMrALbSOxoTVMz/wBtAR2A/h3Q5YOgbEptlZgsJyYxUckZdxYG7VCjoiC9cD3GIFt5trGDlSQTiFEmf+4VL1O4GumD+fdPl5g4OZ9P2oro/wBLXLlwHS3kvWgzEu6lAIg+b7htPqJ+wmOJPudLs3XdVjcjhiwa5JCAh8bJJ+4lQIwDNQnhlyT9dEUnVC/p+tW2pe7ce3G0BNg2uohgdzHbuILxwTxxE25TuAW5bR7h42YLHBDFGMYwO5mPYUl6d0y3bujT3PEt3PDtEhYdPFZJfJBCkOIlYwW+ag6prTba6huEomwWwGNuGLOFA2CSBtQQefYcrlxPSCotbZxrr5a48wrEK0xP/kVI8xEAwSMfuN0vVXY2adgXLOXm0DO4XGXcUEvwSCRgqP1Cusqpcv3FfzJa8I7mIXerEMWgeado2sDipL2lFywqeM6vca3v8RYQlVuQEI8xBJgtESBzQWFx7FkvZZ+r6rTeFGpZmRmw1toAdYJElZPLSSJkGsqDV6Kzb0umCjykOTOCxi2JO8GO59e1ZQ8de2PQ26L1i5f6gl7TgJpn0hKJcCrL7iibismSwAwTgTWn+n7d644uKyEZdwxRXuNm54YM+TcTEwccd6jt6hNgtW1Nq2IVAG8yLMgBt5P6zPNM/wAcInZ37kfzzV5/UKS/uWWH5N6bpFtLfhyHUFTDKr5Qypz7yfkn1pD127YsNvNoPcK3Utr4SKQLYXepYy0k3RBXiD+rfWaxjs2KAEuI7KFBa4EIYIGLgJMc5qrfUf0Zpfwg1aXHs3YQ3LDXBdm47DeN5JacnOQYB9TVMNST2ab4NNoi6DpBfhPDTaFA8MQ327mY3FLGHDNbPOJGBVu02g1ChRbhQghQyiAMH0OcDPtVb+mbSW3RyhHh2z4e1jDeLIYtIH/RtgSPKO4qy3+v8+QiPUkf0FJ9Rl+7t/opFWrSX7JV6dfkGNOGAABK5AHGduP3qRemOGuXHe2Xay1tQWIWInao4WYyQOB7Clx6uzcLA/7z/LvQ515buJH99v5TP9alHNxdq/5NLHyVMcabpHhIlsBCttPDEsRuUQAWA74kEcEmIqLS9PWwqJbcKiEEL4t1hCgKB5mMDyjiIPESZTvfJ5mfXdih71v0uKO+Z/n70vnl6/yMsSLDY1PhrAdCe7HLMSZJYjuTn5pb1Mm5p306Pbtq1vw0kMAqgQJgTAHrNBW7RU51AE9gD/iDTC1dAH/MM36f6UFkndtm4R9EWk6Db8Bbdx1ZjbFtmRWgjaBIB4MbcxOK5679M2jYvXd9zy27jbFOzcVTMBgQGYIBMHgVM+qt/mvMW+JIj4FdJ1NRgXnn3ED+tUjmaf8AsVwv9g69KQ6jSKyA220ZDoy/YbZsnJWASZTOPsERRr/RemuLat/ibqpaEIiG3AJjc3mQmTAzWHq4UZuEr7if68VDc6za7bvkD/WqPNYngQbr+jW7PgvZtNcuISC6bFYoxDuWyqz5FUEDAJiOapum6F1Hf4ly07FpNzzrJ3fdkOfWrA/1Gqr5Z4965T6pX80ih5ovszwfkf6XoFrbbubNt2AWW5cuRuyYKglTBY9j+0Uu1vRbltk8OzbZr15VLq91zbw7b28SfDUDcMf9QxxQifUyNwcccxmsT6jU8bp9J/zxTeWPtB8T+SbU6PXJu0xsJdt3UAe8pkqCGRgJht0QTA70l1HUNRqLljQMDYFjcRdRN7O1ors2psHhxtM8g9/SnNj6l5ILLHMxH7zn9KYaX6pX1zx9kZplmh0I8UjV1UPhzdbfbDSTZaGZ43EKT5Rg4nvWUns/V1wvcHiuB4lwLG0gKHbbHl3cR3rKNQFFh6g2YgfC/wClSW+pRMt+0+kzzVQ/4tcY4Q/MzXA1VwnzSP8Aee9cPhkU8jL0nUQO4H7TVO0l1L3Ub9y4ohQyiTBkbbanHeAf3oY3WJ5c++P86Y6rU2ns27VvSG2Vbc9wXJa6xAVjcMYBgGAQB2q2KPBPfaBKTlQ56f1EW7Y3EkwoloxAwAOwyT8k1Jf64ojifU9viDVV1252Di2wUKqKvOEUAEkd8f8AuuBZuEEi23xE9/f+tK4W7bHc6dR6Ht3rCke0+n9KH/4nbggwDS1NHcPKMBySCMfHxXRtquTaY54aD8f79zQ4RN5JDBNchidpT0lufcTms/EqZ2sEHqCfiorW3aSbcTzuJP8AjzXKX1Y/2REcHPMCYNDj8Ac2E/ilUAi7yMc/7mpE1ltR/aGTJMgf1maBfb3tOTgYUn3OYz34rexRnwyB/wBpJzP7e/PatxRuTDvFaTtucROJxnvXH4pxMGRxICmR/j/rUQTcCotHORyJOIz27elQfh3USBnPrPv+3+NZRQbYe+twRBJ9IAA59+K6/EscEAccH+c+sEUKmhukcQfUEHH78f7zNcjTPxunPEKZ+BPv3o8UMmwxZPDHYO8zGeOcdjQn4pnB2LjsTE/pUlqw4B2lBjmPjHMz8Vj2Dtg7TH5t2D2gfr/Sikg7oHs3ncldwEY5z+1MNNclRuZuSJiBPIway2ba/nG84nLD9IgjtXNx4VQYzBBkiexEc+nPpWaMnQ70+hYcBgCMGSd3p245rjX6ViAu519/LH6yPmgNzwu1wASJO7y/IlcVrV3LibRbuMSRPlk+oye37UvFj8lRDc+lLjSbd5dxM9u+TIGO5rKI02sKDzh8f3gI7dvX/CsplKaJ+OAoNoekfGP6VIwgAjGayspfYno7P+AogfaP996ysoMZAjOZGTyP60RZzukAwCeB6TWqyiKway5BwYn/AHj0/SmFpRjA+4Dgd6ysrMESW23mjHB7D0oa/dIJGOB2H+VZWUEUiMbRlchTgflH+VQpqG39s4+1ePTit1lFdl0d3LxHpwOw9T7VE10le35+w/LkdqysooL7O7agzKrz/wBI9/alvWtQyMu2BKEnyrk+XPFbrKaH9QJf0nPTrpJtnGSJgAdpxAxwOPSnnUNHbCyEWT3Ik/uaysoy7FXSFFnTp/E8owDGOM00ZQ9u3uVTIz5QJgnmBWVlZ9E12F3dKm+2NogjI/Ucen6VTbV9iWljhoGYgbuMVlZTQ7YJ9oissWYyzHJ/Me0D1rKysqoh/9k=) no-repeat center center; 
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
    }
    .bottom{
      width: 200%;
      height: 20%;
      transition: transform 0.5s;
      &.clicked{
        transform: translateX(-50%);
      }
      h1{
          margin:0;
          padding:0;
      }
      p{
          margin:0;
          padding:0;
      }
      .left{
        height:100%;
        width: 50%;
        background: #f4f4f4;
        position:relative;
        float:left;
        .details{
          padding: 20px;
          float: left;
          width: calc(70% - 40px);
        }
        .buy{
          float:right;
          width: calc(30% - 2px);
          height:100%;
          background: #f1f1f1;
          transition: background 0.5s;
          border-left:solid thin rgba(0,0,0,0.1);
          svg{
            font-size:30px;
            padding:30px;
            color: #254053;
            transition: transform 0.5s;
          }
          &:hover{
            background: #A6CDDE;
          }
          &:hover svg{
            transform: translateY(5px);
            color:#00394B;
          }
        }
      }
      .right{
        width: 50%;
        background: #A6CDDE;
        color: white;
        float:right;
        height:200%;
        overflow: hidden;
        .details{
          padding: 20px;
          float: right;
          width: calc(70% - 40px);
        }
        .done{
          width: calc(30% - 2px);
          float:left;
          transition: transform 0.5s;
          border-right:solid thin rgba(255,255,255,0.3);
          height:50%;
          i{
            font-size:30px;
            padding:30px;
            color: white;
          }
        }
        .remove{
          width: calc(30% - 1px);
          clear: both;
          border-right:solid thin rgba(255,255,255,0.3);
          height:50%;
          background: #BC3B59;
          transition: transform 0.5s, background 0.5s;
          &:hover{
            background: #9B2847;
          }
          &:hover i{
            transform: translateY(5px);
          }
          i{
            transition: transform 0.5s;
            font-size:30px;
            padding:30px;
            color: white;
          }
        }
        &:hover{
          .remove, .done{
            transform: translateY(-100%);
          }
        }
      }
    }
  }
  
  .inside{
    z-index:9;
    background: #92879B;
    width:140px;
    height:140px;
    position: absolute;
    top: -70px;
    right: -70px;
    border-radius: 0px 0px 200px 200px;
    transition: all 0.5s, border-radius 2s, top 1s;
    overflow: hidden;
    .icon{
      position:absolute;
      right:85px;
      top:85px;
      color:white;
      opacity: 1;
    }
    &:hover{
      width:100%;
      right:0;
      top:0;
      border-radius: 0;
      height:80%;
      .icon{
        opacity: 0;
        right:15px;
        top:15px;
      }
      .contents{
        opacity: 1;
        transform: scale(1);
        transform: translateY(0);
      }
    }
    .contents{
      padding: 5%;
      opacity: 0;
      transform: scale(0.5);
      transform: translateY(-200%);
      transition: opacity 0.2s, transform 0.8s;
      table{
        text-align:left;
        width:100%;
      }
      h1, p, table{
        color: white;
      }
      p{
        font-size:13px;
      }
    }
  }
`

export const ThemeMainSection = styled.section`
.place-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
`

export const ThemeFooter = styled.footer`
background-color: #222;
color: white;
position: absolute;
left:0;
margin: 0;
width: 100%;
height: 20vw;


.logo{
  h1 {
    margin: 0;
  }
  margin: 0;
  display: flex;
  margin-left: 30px;
  align-items: center;
  font-size: 30px;
}
`

export const ThemeRightSide = styled.div`
display: flex;
align-items: center;
gap: -80px;
`

export const ThemeRightFavorite = styled.div`
position: absolute;
top: 30px;
right: 15px;
background-color: gray;
border-radius: 10px;
opacity: 0.9;
`