<template>
  <div class="container">
    <h1>Nombre de Visiteurs</h1>
    <div class="counter">{{ count }}</div>
    <button v-if="count < 1000" class="button" @click="incrementCounter">Augmenter</button>
    <div v-else><h2>1000ème visiteur !</h2></div>
    <vue-particles
        v-if="count >= 1000"
        id="tsparticles"
        :options="options"
    >
    </vue-particles>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(997);

function incrementCounter() {
  count.value++;
}

const options = ref({
  "fullScreen": {
    "zIndex": 1
  },
  "emitters": {
    "position": {
      "x": 50,
      "y": 100
    },
    "rate": {
      "quantity": 5,
      "delay": 0.15
    }
  },
  "particles": {
    "color": {
      "value": [
        "#1E00FF",
        "#FF0061",
        "#E1FF00",
        "#00FF9E"
      ]
    },
    "move": {
      "decay": 0.05,
      "direction": "top",
      "enable": true,
      "gravity": {
        "enable": true
      },
      "outModes": {
        "top": "none",
        "default": "destroy"
      },
      "speed": {
        "min": 50,
        "max": 100
      }
    },
    "number": {
      "value": 0
    },
    "opacity": {
      "value": 1
    },
    "rotate": {
      "value": {
        "min": 0,
        "max": 360
      },
      "direction": "random",
      "animation": {
        "enable": true,
        "speed": 30
      }
    },
    "tilt": {
      "direction": "random",
      "enable": true,
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 30
      }
    },
    "size": {
      "value": 10,
      "animation": {
        "enable": true,
        "startValue": "min",
        "count": 1,
        "speed": 16,
        "sync": true
      }
    },
    "roll": {
      "darken": {
        "enable": true,
        "value": 25
      },
      "enlighten": {
        "enable": true,
        "value": 25
      },
      "enable": true,
      "speed": {
        "min": 5,
        "max": 15
      }
    },
    "wobble": {
      "distance": 30,
      "enable": true,
      "speed": {
        "min": -7,
        "max": 7
      }
    },
    "shape": {
      "type": [
        "circle",
        "square"
      ],
      "options": {}
    }
  },
  "responsive": [
    {
      "maxWidth": 1024,
      "options": {
        "particles": {
          "move": {
            "speed": {
              "min": 33,
              "max": 66
            }
          }
        }
      }
    }
  ]
})

</script>

<style scoped>
.container {
  background-color: #008080; /* Turquoise */
  background-image: linear-gradient(to bottom, #008080, #004040); /* Gradient vertical */
  border: 2px solid #000;
  border-radius: 10px;
  width: 300px;
  margin: 100px auto;
  text-align: center;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #000;
  text-shadow: 2px 2px #fff; /* White text shadow */
}

.counter {
  font-size: 48px;
  margin-bottom: 30px;
  color: #000;
  text-shadow: 2px 2px #fff; /* White text shadow */
}

.button {
  background-color: #808080; /* Gray */
  background-image: linear-gradient(to bottom, #808080, #404040); /* Gradient vertical */
  border: 2px solid #000;
  color: #000;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #a0a0a0; /* Light gray */
}
</style>
