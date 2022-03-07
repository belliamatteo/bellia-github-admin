import * as React from "react";
import { TypeStudent } from "../../types/types";
export function DetailStudent(props: TypeStudent){
    return (
        <div>
            nome: {props.name} <br />
            cognome: {props.surname}<br />
            classe: {props.classe}<br />
            nickname: {props.login}
        </div>
    );
}