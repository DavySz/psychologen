import React from "react";
import '../App.css';
import { Button } from "./Button";
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1> PSYCHOLOGEN</h1>
      <p>Programa para agendamento de escutas psicológicas</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          buttonLink="sign-up"
        >
          COMECE AQUI
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
