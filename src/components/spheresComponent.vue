<template>
  <div class="sphere-container" ref="containerRef" @mousemove="handleMouseMove">
    <div
      v-for="sphere in spheres"
      :key="sphere.id"
      class="sphere"
      :style="getSphereStyle(sphere)"
      @mouseenter="handleSphereHover(sphere)"
    >
      <div class="language-icon">
        <img
          v-if="sphere.iconType === 'svg'"
          :src="sphere.icon"
          :alt="sphere.name"
          class="icon-image"
        />
        <span v-else class="icon-text">
          {{ sphere.icon }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from "vue";

const containerRef = ref(null);
const spheres = ref([]);
const mousePosition = reactive({ x: 0, y: 0 });
const animationFrameId = ref(null);

const SPHERE_COUNT = 27;
const SPHERE_SIZE = 60;
const BOUNCE_DAMPING = 0.8;
const MIN_SPEED = 0.5;
const MAX_SPEED = 2;
const MOUSE_REPULSION_DISTANCE = 100;
const MOUSE_REPULSION_FORCE = 0.5;

const programmingLanguages = [
  {
    name: "Arch Linux",
    color: "#333333",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg",
    iconType: "svg",
  },
  {
    name: "Axios",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
    iconType: "svg",
  },
  {
    name: "Bash",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
    iconType: "svg",
  },
  {
    name: "Composer",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/composer/composer-original.svg",
    iconType: "svg",
  },
  {
    name: "CSS3",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
    iconType: "svg",
  },
  {
    name: "Docker",
    color: "#00084D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
    iconType: "svg",
  },
  {
    name: "FastAPI",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    iconType: "svg",
  },
  {
    name: "Flask",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    iconType: "svg",
  },
  {
    name: "Git",
    color: "#000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    iconType: "svg",
  },
  {
    name: "GitHub",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    iconType: "svg",
  },
  {
    name: "Go",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
    iconType: "svg",
  },
  {
    name: "HTML",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
    iconType: "svg",
  },
  {
    name: "Java",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    iconType: "svg",
  },
  {
    name: "JavaScript",
    color: "#000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    iconType: "svg",
  },
  {
    name: "JSON",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg",
    iconType: "svg",
  },
  {
    name: "Laravel",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    iconType: "svg",
  },
  {
    name: "Linux",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    iconType: "svg",
  },
  {
    name: "MongoDB",
    color: "#001E2B",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    iconType: "svg",
  },
  {
    name: "MySQL",
    color: "#F29111",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    iconType: "svg",
  },
  {
    name: "NPM",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    iconType: "svg",
  },
  {
    name: "PHP",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    iconType: "svg",
  },
  {
    name: "PostgreSQL",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
    iconType: "svg",
  },
  {
    name: "Postman",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    iconType: "svg",
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg",
    iconType: "svg",
  },
  {
    name: "Sass",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    iconType: "svg",
  },
  {
    name: "VSCode",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    iconType: "svg",
  },
  {
    name: "Vue",
    color: "#42B883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-plain.svg",
    iconType: "svg",
  },
];

const createSphere = (id) => {
  const lang = programmingLanguages[id % programmingLanguages.length];
  const vx = (Math.random() - 0.5) * MAX_SPEED;
  const vy = (Math.random() - 0.5) * MAX_SPEED;
  return {
    id,
    x: Math.random() * (window.innerWidth - SPHERE_SIZE),
    y: Math.random() * (window.innerHeight - SPHERE_SIZE),
    vx: Math.abs(vx) < MIN_SPEED ? MIN_SPEED * (vx >= 0 ? 1 : -1) : vx,
    vy: Math.abs(vy) < MIN_SPEED ? MIN_SPEED * (vy >= 0 ? 1 : -1) : vy,
    color: lang.color,
    icon: lang.icon,
    iconType: lang.iconType,
    name: lang.name,
    scale: 0.8,
    rotation: 0,
    rotationSpeed: (Math.random() - 0.5) * 2,
    radius: SPHERE_SIZE / 2,
  };
};

const initializeSpheres = () => {
  spheres.value = Array.from({ length: SPHERE_COUNT }, (_, i) =>
    createSphere(i)
  );
};

const getSphereStyle = (sphere) => ({
  left: `${sphere.x}px`,
  top: `${sphere.y}px`,
  backgroundColor: `${sphere.color}`,
  transform: `scale(${sphere.scale}) rotate(${sphere.rotation}deg)`,
  boxShadow: `0 0 20px ${sphere.color}`,
});

const handleSphereCollisions = () => {
  for (let i = 0; i < spheres.value.length; i++) {
    for (let j = i + 1; j < spheres.value.length; j++) {
      const sphere1 = spheres.value[i];
      const sphere2 = spheres.value[j];
      const dx = sphere1.x + sphere1.radius - (sphere2.x + sphere2.radius);
      const dy = sphere1.y + sphere1.radius - (sphere2.y + sphere2.radius);
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < sphere1.radius + sphere2.radius) {
        if (distance === 0) continue; // Evitar división por cero
        // Normalizar vector de colisión
        const nx = dx / distance;
        const ny = dy / distance;
        // Separar elementos para evitar superposición
        const overlap = sphere1.radius + sphere2.radius - distance;
        const separationX = (overlap / 2) * nx;
        const separationY = (overlap / 2) * ny;
        sphere1.x += separationX;
        sphere1.y += separationY;
        sphere2.x -= separationX;
        sphere2.y -= separationY;
        // Calcular velocidades relativas
        const rvx = sphere1.vx - sphere2.vx;
        const rvy = sphere1.vy - sphere2.vy;
        // Velocidad relativa en dirección de colisión
        const speed = rvx * nx + rvy * ny;
        // No resolver si se están separando
        if (speed > 0) continue;
        // Coeficiente de restitución (rebote)
        const restitution = 0.7;
        // Factor de impulso
        const impulse = (2 * speed * restitution) / 2; // Asumiendo masas iguales
        // Aplicar impulso
        sphere1.vx -= impulse * nx;
        sphere1.vy -= impulse * ny;
        sphere2.vx += impulse * nx;
        sphere2.vy += impulse * ny;
        // Añadir rotación por colisión
        sphere1.rotationSpeed += (Math.random() - 0.5) * 3;
        sphere2.rotationSpeed += (Math.random() - 0.5) * 3;
        // Limitar velocidad de rotación
        sphere1.rotationSpeed = Math.max(
          -5,
          Math.min(5, sphere1.rotationSpeed)
        );
        sphere2.rotationSpeed = Math.max(
          -5,
          Math.min(5, sphere2.rotationSpeed)
        );
      }
    }
  }
};

const handleMouseRepulsion = () => {
  spheres.value.forEach((sphere) => {
    const dx = mousePosition.x - (sphere.x + sphere.radius);
    const dy = mousePosition.y - (sphere.y + sphere.radius);
    const distance = Math.sqrt(dx * dx + dy * dy);
    // Aplicar fuerza de repulsión si está cerca del mouse
    if (distance < MOUSE_REPULSION_DISTANCE) {
      const force =
        ((MOUSE_REPULSION_DISTANCE - distance) / MOUSE_REPULSION_DISTANCE) *
        MOUSE_REPULSION_FORCE;
      sphere.vx -= (dx / distance) * force;
      sphere.vy -= (dy / distance) * force;
    }
  });
};

const updateSpheres = () => {
  spheres.value.forEach((sphere) => {
    // Actualizar posición
    sphere.x += sphere.vx;
    sphere.y += sphere.vy;
    // Actualizar rotación continua
    sphere.rotation += sphere.rotationSpeed;
    // Rebote en bordes con damping
    if (sphere.x <= 0 || sphere.x >= window.innerWidth - SPHERE_SIZE) {
      sphere.vx *= -BOUNCE_DAMPING;
      sphere.x = Math.max(
        0,
        Math.min(sphere.x, window.innerWidth - SPHERE_SIZE)
      );
    }
    if (sphere.y <= 0 || sphere.y >= window.innerHeight - SPHERE_SIZE) {
      sphere.vy *= -BOUNCE_DAMPING;
      sphere.y = Math.max(
        0,
        Math.min(sphere.y, window.innerHeight - SPHERE_SIZE)
      );
    }
    // Mantener velocidad mínima para evitar que se detengan
    const speed = Math.sqrt(sphere.vx ** 2 + sphere.vy ** 2);
    if (speed < MIN_SPEED) {
      const angle = Math.random() * Math.PI * 2;
      sphere.vx = Math.cos(angle) * MIN_SPEED;
      sphere.vy = Math.sin(angle) * MIN_SPEED;
    }
    // Restaurar escala gradualmente
    if (sphere.scale > 1) {
      sphere.scale = Math.max(1, sphere.scale - 0.02);
    }
  });
};

const animate = () => {
  handleSphereCollisions();
  handleMouseRepulsion();
  updateSpheres();
  animationFrameId.value = requestAnimationFrame(animate);
};

const handleMouseMove = (event) => {
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
};

const handleSphereHover = (sphere) => {
  sphere.scale = 1.2;
};

onMounted(() => {
  initializeSpheres();
  animate();
});

onUnmounted(() => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
  }
});
</script>

<style lang="sass" scoped>
.sphere-container
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  z-index: 2

.sphere
  position: absolute
  width: 60px
  height: 60px
  padding: 0.5rem
  border-radius: 50%
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))
  backdrop-filter: blur(10px)
  border: 1px solid rgba(255, 255, 255, 0.2)
  transition: none
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2)
  &::after
    content: ""
    position: absolute
    top: -10px
    left: -10px
    right: -10px
    bottom: -10px
    padding: 0.5rem
    border-radius: 50%
    background: inherit
    opacity: 0.3
    filter: blur(10px)
    z-index: -1
    animation: pulse 4s ease-in-out infinite
  &:hover
    &::after
      opacity: 0.6
      animation-duration: 2s

.language-icon
  display: flex
  align-items: center
  justify-content: center
  z-index: 1

.icon-image
  width: 30px
  height: 30px
  object-fit: contain
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.3))

.icon-text
  color: white
  font-weight: bold
  font-size: 1rem
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5)

@keyframes highlight
  0%,
  100%
    opacity: 0.6
    transform: scale(1)
  50%
    opacity: 0.9
    transform: scale(1.2)

@keyframes pulse
  0%,
  100%
    transform: scale(1)
    opacity: 0.3
  50%
    transform: scale(1.1)
    opacity: 0.5
</style>
