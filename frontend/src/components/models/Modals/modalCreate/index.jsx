import { Modal } from "@mui/material";
import './style.css'

export const ModalCreate = ({ open, close }) => {
    return (
        <Modal open={open} onClose={close} className="container-modal">
            <div className="container-card-modal">
                <form>
                    <div>
                        <label>Nome da Música:</label>
                        <input type="text" placeholder="Nome da Música" />
                    </div>

                    <div>
                        <label>Capa da Música:</label>
                        <input type="text" placeholder="Capa da Música" />
                    </div>

                    <div>
                        <label>Link da Música:</label>
                        <input type="text" placeholder="Link da Música" />
                    </div>

                    <div>
                        <label>Cantor da Música:</label>
                        <input type="text" placeholder="Cantor da Música" />
                    </div>
                </form>
            </div>
        </Modal>
    )
}
