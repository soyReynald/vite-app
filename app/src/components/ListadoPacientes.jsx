import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    const generatedKey = () =>
        Math.random().toString(36).substring(2) + Date.now().toString(36);

    return pacientes.length > 0 ? (
        <>
            <div className="md:w-1/2 md:h-screen overflow-y-scroll">
                <h2 className="font-black text-3xl text-center">
                    Listado Pacientes
                </h2>
                <p className="text-xl mt-5 text-center">
                    Administra tus {""}
                    <span className="text-indigo-600 font-bold">
                        Pacientes y Citas
                    </span>
                </p>
                {pacientes.map((paciente, idx) => (
                    <Paciente
                        paciente={paciente}
                        key={`paciente-` + idx + `-${generatedKey()}`}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                ))}
            </div>
        </>
    ) : (
        <div className="md:w-1/2 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">
                No hay pacientes
            </h2>
            <p className="text-xl mt-5 text-center">
                Agrega tus pacientes y {""}
                <span className="text-indigo-600 font-bold">
                    aparecen en este lugar
                </span>
            </p>
        </div>
    );
};

export default ListadoPacientes;
