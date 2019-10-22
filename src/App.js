import React from 'react'
import 'bulma/bulma.sass'

const modalContentStyle = {
  padding: '40px 20px',
  margin: '0 10px',
  borderRadius: '10px',
  backgroundColor: 'white',
  color: 'gray'
}

const modalCardStyle = {
  margin: '0 10px',
  color: 'gray'
}

const App = () => {
  const [active, setActive] = React.useState(false)
  const [cardModal, setCardModal] = React.useState(false)

  const toggleModal = () => { setCardModal(cardModal => !cardModal) }

  return (
    <section class="hero is-fullheight is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class={`modal${active ? ' is-active' : ''}`}>
            <div class="modal-background"></div>
            {cardModal ? (
                <div class="modal-card">
                  <div style={modalCardStyle}>
                    <header class="modal-card-head">
                      <p class="modal-card-title">Modal title</p>
                      <button class="delete" onClick={() => setActive(false)} aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                      This is an example modal
                    </section>
                    <footer class="modal-card-foot">
                      <button class="button is-success">Save changes</button>
                      <button class="button" onClick={() => setActive(false)}>Cancel</button>
                    </footer>
                  </div>
                </div>
              ) : (
                <React.Fragment>
                  <div class="modal-content">
                    <div style={modalContentStyle}>
                      This is an example modal
                    </div>
                  </div>
                  <button
                    class="modal-close is-large"
                    aria-label="close"
                    onClick={() => setActive(false)}
                  />
                </React.Fragment>
              )}
          </div>
          <h1 class="title">
            Bulma Modal
          </h1>
          <h2 class="subtitle">
            This is a demo of bulma modal
          </h2>
          <div className="buttons">
            <button
              class="button is-outlined is-medium"
              onClick={toggleModal}
            >
              Toggle Modal
            </button>
            <button
              class="button is-outlined is-medium"
              onClick={() => setActive(true)}
            >
              Open Modal
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
