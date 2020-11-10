import React from "react";
import {
  SectionContainer,
  ImagenPresentacion,
  ImagenPresentacionPlaceHolder,
  SectionBorder,
} from "../../component/section/section.styles";
import CardSlider from "../card-slider/card-slider.component";

function Directory() {
    return (
        <div>
        <SectionContainer background="4B7A9D">
            <span>Empresa joven, especializada en desarrollar soluciones Web.</span>
            <ImagenPresentacion src="" />

            <ImagenPresentacionPlaceHolder />
            <SectionBorder color="eaeaec" side="bot-right" />
        </SectionContainer>
        <SectionContainer background="eaeaec">
            <span>Imagen</span>
            <span>Nuestros clientes</span>
            <SectionBorder color="e0c090" side="bot-left" />
        </SectionContainer>
        <SectionContainer  background="e0c090">
            <span>Nuestros clientes</span>
            <span>Imagen</span>
            <SectionBorder color="903939" side="bot-right" />
        </SectionContainer>
        <SectionContainer  background="903939">
            <CardSlider></CardSlider>
        </SectionContainer>
        </div>
    );
}

export default Directory;
