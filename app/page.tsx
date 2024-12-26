"use client";

import { useState } from "react";
import InputField from "./calculator/input";
import Dollar from "./calculator/components/svg/Dollar";
import TipButton from "./calculator/tip-button";
import ProfileIcon from "./calculator/components/svg/Personal";
import Result from "./calculator/result";

export default function Page() {
  const [bill, setBill] = useState(0);
  const [percentTip, setPercentTip] = useState(0);
  const [people, setPeople] = useState(0);

  const handleReset = () => {
    setBill(0);
    setPercentTip(0);
    setPeople(0);
  };

  const calculateTip = () => (bill * percentTip) / 100;
  const calculateTotal = () => bill + calculateTip();
  const calculateTotalPerPerson = () => calculateTotal() / people;
  const calculateTipPerPerson = () => calculateTip() / people;

  return (
    <div className="bg-light-grayish-cyan min-h-screen font-spaceMono flex items-center justify-center">
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-dark-grayish-cyan text-center pt-8">S P L I</h1>
        <h1 className="text-3xl font-bold text-dark-grayish-cyan text-center pb-8">T T E R</h1>

        <form>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-white rounded-xl p-8 gap-8">
            <div className="grid grid-cols-1 gap-8">
              <InputField
                svg={<Dollar />}
                onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
                id="bill"
                label="Bill"
              />

              <div className="grid grid-cols-1 gap-4">
                <label
                  htmlFor="tip"
                  className="text-grayish-cyan text-xl font-bold"
                >
                  Select Tip %
                </label>
                <div className="grid grid-cols-3 font-extrabold text-2xl gap-4">
                  {["5%", "10%", "15%", "25%", "50%"].map((tip) => (
                    <TipButton
                      key={tip}
                      text={tip}
                      onClick={() => setPercentTip(parseInt(tip))}
                    />
                  ))}
                  <input
                    type="number"
                    onChange={(e) => setPercentTip(Number(e.target.value))}
                    placeholder="Custom"
                    className="p-2  text-right border border-transparent focus:outline-none focus:border-primary rounded-lg bg-very-light-grayish-cyan text-dark-grayish-cyan font-bold text-xl"
                  />
                </div>
              </div>

              <InputField
                svg={<ProfileIcon />}
                onChange={(e) => setPeople(parseInt(e.target.value) || 0)}
                id="people"
                label="Number of People"
              />
            </div>

            <div className="flex flex-col justify-between p-6 bg-very-dark-cyan rounded-xl">
              <div>
                <Result
                  label="Tip Amount"
                  value={
                    isFinite(calculateTipPerPerson())
                      ? parseFloat(calculateTipPerPerson().toFixed(2))
                      : 0
                  }
                />
                <Result
                  label="Total"
                  value={
                    isFinite(calculateTotalPerPerson())
                      ? parseFloat(calculateTotalPerPerson().toFixed(2))
                      : 0
                  }
                />
              </div>

              <button
                className="active:bg-light-grayish-cyan bg-primary text-xl text-very-dark-cyan p-4 w-full font-extrabold rounded-lg"
                onClick={handleReset}
              >
                RESET
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
