# 🚗 Comparador de Carros Della Porta

Este é o projeto de um comparador de veículos, desenvolvido como iniciativa pessoal com foco em publicação e monetização futura.

A aplicação permite a comparação visual de até três modelos diferentes de carros, com base em dados como marca, modelo, ano, torque e potência.

## 💡 Status do Projeto

🚧 Em desenvolvimento — mas está disponível ao público.

# Estrutura da pasta `scripts/`

Este projeto está organizado com foco em **clareza**, **separação de responsabilidades** e **facilidade para evoluir**.

## 📁 scripts/
Contém todos os arquivos TypeScript do projeto.

---

### 📄 index.ts
Ponto de entrada principal do app. Responsável por importar e inicializar as funções necessárias para que tudo funcione.

---

## 📁 components/
Contém funções responsáveis por **criar elementos ou partes da interface**, como listas, sugestões, ou estruturas visuais reutilizáveis.

- `carregarLista.ts`  
- `criarItensNaLista.ts`
- `preencherInfoDoCardDoCarros.ts`  

---

## 📁 handlers/
Contém funções que **lidam com eventos** ou ações diretas do usuário, como cliques ou digitação.

- `ouvirQualLixeira.ts`  
- `ouvirInputCarro.ts`  

---

## 📁 services/
Contém a **lógica de negócios** da aplicação.  
Aqui ficam funções que lidam com dados e regras, como busca e filtragem.

- `filtrarCarros.ts`  
  - Inclui também uma lista inicial de carros para busca.
  - No futuro, poderá ser substituído por um JSON externo ou uma API.

---

## 📁 utils/
Funções **utilitárias** e genéricas que ajudam o projeto como um todo.  
Não estão ligadas diretamente à interface, e podem ser reaproveitadas.

- `ehDeQualCard.ts`  
- `visibilidadeDaLixeira.ts`
- `limparCampo.ts`

---

### ✨ Futuras melhorias (ideias):
- Substituir a lista fixa de carros por um JSON.
- Integrar com uma API (quando estiver disponível).
- Refatorar os componentes para usarem frameworks ou bibliotecas se necessário.

---

Feito com ❤️ por Filipe Della Porta.
