import React from "react";

function InputMessage() {
  return (
    <div className="InputMessage">
      <form className="InputMessage__form">
        <textarea className="form__textarea" name="" id="" />
        <div className="form_submit">
          <button type="submit" className="submit__btn">
            전송
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputMessage;
