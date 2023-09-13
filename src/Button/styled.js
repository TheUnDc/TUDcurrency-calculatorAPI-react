import styled from "styled-components";
import { Buttons } from "./index";

export const ButtonSwapStyled = styled(Buttons)`
        width: 50%;
	    margin-top: 10px;
	    padding: 5px;
	    background-color: #436d9f;
	    color: white;
	    border-radius: 20px / 40px;
	    border: none;
	    cursor: pointer;

    &:hover {
        background-color: #4b7ab4;
	    color: white;
    }
`;

export const ButtonSubmitStyled = styled(Buttons)`
        width: 100%;
        margin: 10px 0 5px 0;
        padding: 5px;
        background-color: #253c59;
        color: white;
        border-radius: 20px / 40px;
        border: none;
        cursor: pointer;

    &:hover {
        background-color: #4b7ab4;
	    color: white;
    }
`;


