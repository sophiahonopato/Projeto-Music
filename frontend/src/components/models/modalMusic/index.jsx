import { Modal } from "@mui/material"
import './style.css'

export const ModalMusic = ({ open, close, musica }) => {
if (!musica) return null
    return (
        <Modal open={open} onClose={close} className="container-modal">
            <div className="container-card-modal">
                <h2>{musica.nome}</h2>
                <iframe width="560" height="315" src={musica.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>{musica.cantor}</p>
            </div>

        </Modal>
    )

}

