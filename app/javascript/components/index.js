import {  render } from "react-dom"
import h from "components/htm_create_element"

import Section from "components/section"


render(
    h`
        <${Section}/>
    `,
    document.getElementById("root")
)