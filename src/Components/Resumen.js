import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { primeraMayuscula } from '../Helper';

const ContendorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    const  {marca, year, plan} = datos;
    if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
        return null;
    }
    return (
        <ContendorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContendorResumen>
    );
}
 
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
export default Resumen;