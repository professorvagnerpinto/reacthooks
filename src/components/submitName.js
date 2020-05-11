/**
 * Vídeo #1 ao #13: React Hooks - Módulo 22 - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com o React Hooks.
 * Exemplo de componente externo acessando a state de outro componente.
 * by: Vagner Pinto
 */

//um componente externo para demostrar o acesso as states entre componentes com o Hooks
const submitName = (name, setName)=>{
    alert('Opa! Tudo bem? ' + name);
    setName('');
}

export default submitName;
