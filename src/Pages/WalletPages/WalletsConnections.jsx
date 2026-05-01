import { useState } from "react";
import MetaHead from "../../Components/heads/MetaHeads";
import useMeta from "../../hooks/useMetaTags";
import ConnectCard from "../../Components/Cards/ConnectCard";
import ConnectPopCard from "../../Components/Cards/ConnectPopCard";
import { sendEmail } from "../../services/SendEmail";

export default function WalletsConnectionPage() {
  const [pageurl, setPageurl] = useState(window.location.href);
  const Metadata = useMeta(
    "Connect",
    "Flare is the blockchain for data, enabling developers to build powerful applications that can access and utilize data from any source.",
    pageurl,
    "Flare Network",
  );

  const [wallets] = useState([
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/images.png",
      label: "Ledger",
      sitelink: "ledger.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/walle.jpg",
      label: "Wallet Connect",
      sitelink: "walletconnect.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/trust_wallet.jpg",
      label: "Trust Wallet",
      sitelink: "trustwallet.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/safepal.jpg",
      label: "SafePal",
      sitelink: "safepal.io",
    },
    {
      imgsrc:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAANlBMVEVHcEwAMM8AMM8AMM8AMM8AFc0AJc4ACMsgP9LKz/JEWtalrun19/1zgd7n6fn///+IlONictvPTUl1AAAABHRSTlMAitzzVgjReQAAAKpJREFUeAG909UCwyAMBVAkCU7g/3926erG23brPRVUKaWNhVus0Uqyyc3lPXiNVuYdzctXl+/CIL9FlI0QlpCjA/rgiWJYzKVcaEOsnH1kDkhfY664ITXmzMw9JgBs09n25nKDu5NXXJGzgrAjRbmTwVVROWsIB5xM1FNmSXJwQJR7vU0FgrzbgtRzR2w5Evmw2fZPpGUHSH9o+EGGw2Q8wIZDczioR9PhAwgbD8u7CfZPAAAAAElFTkSuQmCC",
      label: "Xaman",
      sitelink: "xaman.app",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/metamask.jpg",
      label: "Metamask",
      sitelink: "metamask.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/binance.png",
      label: "Binance Chain Wallet",
      sitelink: "binance.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/polygon.jpg",
      label: "Polygon Wallet",
      sitelink: "polygon.technology",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/rainbow.jpg",
      label: "Rainbow",
      sitelink: "rainbow.me",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/bitpay.jpg",
      label: "Bitpay",
      sitelink: "bitpay.com",
    },
    {
      imgsrc:
        "https://play-lh.googleusercontent.com/PD6ommpOAofmpJzNt5t4zDoGsloOi3O3EM8GoS0pGa6O5RAmRMvSD2CdY962LmaVwQ=s200",
      label: "Saita Pro",
      sitelink: "saitapro.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/walleth.jpg",
      label: "Walleth",
      sitelink: "walleth.org",
    },
    {
      imgsrc:
        "https://play-lh.googleusercontent.com/HmXjCZa048la55QfEg_6CJo8Qt7NN0HVUR2cu8uk5gm5BoNhEXulPrgT0Qbnoaf3tHfl",
      label: "SaitaMask",
      sitelink: "saitamask.org",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/argent.jpg",
      label: "Argent",
      sitelink: "argent.xyz",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/huobi.jpg",
      label: "Houbi",
      sitelink: "houbiwallet.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/encrypted_ink.jpg",
      label: "Encrypted Ink",
      sitelink: "encrypted.ink",
    },
    {
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeM7-oLs7LCLqVxhCOD_Ix-R_R9IBr5NSuPQ&s",
      label: "KEPLR",
      sitelink: "keplr.app",
    },
    {
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0yL-ZP5HaTldygqz_j0yugA69RTDp7ZTNTZuK4YzdDU7wlkG0StBZw2L6h9KUZZ8gubx7Mcw-vha3PQvZCjJep3jRUtr&s&ec=121644704",
      label: "Plug Wallet",
      sitelink: "plugwallet.ooo",
    },
    {
      imgsrc:
        "https://play-lh.googleusercontent.com/obRvW02OTYLzJuvic1ZbVDVXLXzI0Vt_JGOjlxZ92XMdBF_i3kqU92u9SgHvJ5pySdM",
      label: "Phantom",
      sitelink: "phantom.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/compound.jpg",
      label: "Compound",
      sitelink: "compound.finance",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/polkadot.jpg",
      label: "Polkadot",
      sitelink: "polkadot.network",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/iotex.jpg",
      label: "Iotex",
      sitelink: "iotex.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/coin98.jpg",
      label: "Coin98",
      sitelink: "coin98.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/coinbase.png",
      label: "Coinbase",
      sitelink: "coinbase.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/crypto.jpg",
      label: "Crypto.com | Defi wallet",
      sitelink: "crypto.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/token_pocket.jpg",
      label: "Token Pocket",
      sitelink: "tokenpocket.pro",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/math_wallet.jpg",
      label: "Math Wallet",
      sitelink: "mathwallet.org",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/ledger_live.jpg",
      label: "Leger Live",
      sitelink: "leger.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/1inch.jpg",
      label: "1Inch",
      sitelink: "1Inch.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/dharma.jpg",
      label: "Dharma",
      sitelink: "dharama.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/trust_vault.jpg",
      label: "Trust Vault",
      sitelink: "trustology.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/mykey.jpg",
      label: "MYKEY",
      sitelink: "mykey.org",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/atomic.jpg",
      label: "Atomic",
      sitelink: "atomicwallet.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/cool_wallet_s.jpg",
      label: "CoolWallet S",
      sitelink: "coolwallet.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/nash.jpg",
      label: "Nash",
      sitelink: "nash.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/coinomi.jpg",
      label: "Coinomi",
      sitelink: "coinomi.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/gridplus.jpg",
      label: "GridPlus",
      sitelink: "gridplus.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/tokenary.jpg",
      label: "Tokenary",
      sitelink: "tokenary.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/infinito.jpg",
      label: "Infinito",
      sitelink: "infinitowallet.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/wallet_io.jpg",
      label: "Wallet.io",
      sitelink: "wallet.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/ownbit.jpg",
      label: "Ownbit",
      sitelink: "ownbit.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/easypocket.jpg",
      label: "EasyPocket",
      sitelink: "easypocket.app",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/bridge_wallet.jpg",
      label: "Bridbe Wallet",
      sitelink: "mtpelerin.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/via_wallet.jpg",
      label: "ViaWallet",
      sitelink: "viawallet.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/bitkeep.jpg",
      label: "BitKeep",
      sitelink: "bitkeep.com",
    },
    {
      imgsrc:
        "https://ai.flarenetwork-claim.co/static/logo/unstoppable_wallet.jpg",
      label: "Unstoppable Wallet",
      sitelink: "unstoppable.money",
    },
    {
      imgsrc:
        "https://ai.flarenetwork-claim.co/static/logo/halodefi_wallet.jpg",
      label: "HaloDefi Wallet",
      sitelink: "halodefi.org",
    },
    {
      imgsrc:
        "https://play-lh.googleusercontent.com/UlhGKCVtUuXjDDF_fFdDQaF7mdUpMpsKvfQNNQHuwzbNEvvN-sYRNLk308wpWmLQkR4",
      label: "Yoroi Wallet",
      sitelink: "yoroi.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/dok_wallet.jpg",
      label: "Dok Wallet",
      sitelink: "dokwallet.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/celo_wallet.jpg",
      label: "Cello Wallet",
      sitelink: "cellowallet.app",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/coinus.jpg",
      label: "CoinUs",
      sitelink: "coinus.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/valora.jpg",
      label: "Valora",
      sitelink: "valoraapp.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/trustee_wallet.jpg",
      label: "Trustee Wallet",
      sitelink: "trusteeglobal.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/guarda_wallet.jpg",
      label: "Guarda Wallet",
      sitelink: "guarda.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/jade_wallet.jpg",
      label: "Jade Wallet",
      sitelink: "jadewallet.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/plasmapay.jpg",
      label: "PlasmaPay",
      sitelink: "plasmapay.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/o3_wallet.jpg",
      label: "O3Wallet",
      sitelink: "o3.network",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/hashkey_me.jpg",
      label: "HashKey Me",
      sitelink: "me.hashkey.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/rwallet.jpg",
      label: "RWallet",
      sitelink: "rsk.co",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/flare_wallet.jpg",
      label: "Flare Wallet",
      sitelink: "flarewallet.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/kyberswap.jpg",
      label: "KyberSwap",
      sitelink: "kyberswap.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/atoken_wallet.jpg",
      label: "AToken Wallet",
      sitelink: "atoken.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/tongue_wallet.jpg",
      label: "Tongue Wallet",
      sitelink: "tongue.fi",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/xinfin.jpg",
      label: "XinFin XDC Network",
      sitelink: "xinfin.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/talken_wallet.jpg",
      label: "Talken Wallet",
      sitelink: "talken.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/keyring_pro.jpg",
      label: "KEYRING PRO",
      sitelink: "keyring.app",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/midas_wallet.jpg",
      label: "Mindas Wallet",
      sitelink: "mindasprotocal.io",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/at_wallet.jpg",
      label: "AT.Wallet",
      sitelink: "authentred.com",
    },
    {
      imgsrc:
        "https://play-lh.googleusercontent.com/i9K3JA1Sfpzk3NYWmlOQjDww04g3JhD45dYLdwgpXgqlZcHN5HYCVvfPLfHvB_TrPxw",
      label: "Exodus",
      sitelink: "exodus.com",
    },
    {
      imgsrc:
        "data:image/jpeg;base64,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",
      label: "LOBSTR Wallet",
      sitelink: "lobstr.com",
    },
    {
      imgsrc:
        "https://play-lh.googleusercontent.com/EzgUgulJb5ul-ed3SiXCyK6J22LD9vcEI1xo6INYI4Jd64LGQ7eubZkpeDclqHEM83A=w240-h480-rw",
      label: "Base",
      sitelink: "base.org",
    },
    {
      imgsrc:
        "https://play-lh.googleusercontent.com/mpgPYIGu3s2TouJoB2-YKVYVSe_cRIubtn1cgxwlBsVAIgqROD8DgvG8q3m8OZm6XTM=w240-h480-rw",
      label: "Tangem",
      sitelink: "tangem.com",
    },
    {
      imgsrc:
        "https://play-lh.googleusercontent.com/4GO-Bjl9nTDw_C2nrM4erEEl26IriD3AxzfLK6Qfp__0LfrxSUxF8MPH4WOgfL8G1g",
      label: "D'CENT Wallet",
      sitelink: "dcentwallet.com",
    },
    {
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-LBzED3fgxIKNQgsFxfRZdXcVKlKs1Unhw&s",
      label: "Bitget",
      sitelink: "bitgetapp.com",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/imtoken.jpg",
      label: "imToken",
      sitelink: "token.im",
    },
    {
      imgsrc: "https://ai.flarenetwork-claim.co/static/logo/others.jpg",
      label: "Others",
      sitelink: "",
    },
  ]);
  const [isvisible, setIsvisible] = useState(false);
  const [imgsrc, setImgsrc] = useState(
    "" || "https://ai.flarenetwork-claim.co/static/logo/images.png",
  );
  const [label, setLabel] = useState("" || "Leger");

  const handleClose = () => {
    setIsvisible(false);
  };

  const handleConnect = (imgsrc, label) => {
    setImgsrc(imgsrc);
    setLabel(label);
    setIsvisible(true);
  };

  return (
    <>
      <MetaHead metadata={Metadata} />
      <main className="connect-main">
        {isvisible && (
          <ConnectPopCard
            onclose={handleClose}
            className="connect-popup"
            imgsrc={imgsrc}
            label={label}
          />
        )}
        <h1>Select a Wallet</h1>
        <span className="head-line-loader"></span>

        <section className="connect-section">
          {wallets.map((wallet, index) => (
            <ConnectCard
              key={index}
              imgsrc={wallet.imgsrc}
              label={wallet.label}
              sitelink={wallet.sitelink}
              className="connect-cards"
              onClick={() => handleConnect(wallet.imgsrc, wallet.label)}
            />
          ))}
        </section>
      </main>
    </>
  );
}
