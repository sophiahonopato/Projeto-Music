import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { ModalMusic } from '../../models/modalMusic'
import { ModalCreate } from '../../models/Modals/modalCreate'

export const SectionMusic = () => {

    const [musicas, setMusicas] = useState([])
    const [open, setOpen] = useState(false)
    const [MusicaSelecionada, setMusicaSelecionada] = useState(null)
    const [openCadastro, setOpenCadastro] = useState(false)


    useEffect(() => {
        axios.get(`http://localhost:8081`)

            .then((res) => {
                console.log(res.data)
                setMusicas(res.data)
            })

            .catch((err) => console.log((err)))

    }, [])

    const abrirModal = (musicaModal) => {
        setOpen(true)
        setMusicaSelecionada(musicaModal)
    }

    const abrirCadastro = () => {
        setOpenCadastro(true)
    }

    const fecharModal = (fechaModal) => {
        setOpen(false)
        setMusicaSelecionada(fechaModal)
        setOpenCadastro(false)
    }

    return (
        <>
            <section className="section-music">
                <h2>Nossas músicas</h2>
                <div className="container-cards">

                    {musicas.map((musica) => (
                        <div className="card-music" onClick={() => abrirModal(musica)}>
                            <img src={musica.capa} alt="" />
                            <h3>{musica.nome}</h3>
                            <p>{musica.cantor}</p>
                        </div>
                    ))}
                </div>
                <button className="btn" onClick={() => abrirCadastro()}>Cadastar nova música</button>
            </section>
            <ModalMusic open={open} close={fecharModal} musica={MusicaSelecionada} />
            <ModalCreate open={openCadastro} close={fecharModal}/>
        </>
    )

}
