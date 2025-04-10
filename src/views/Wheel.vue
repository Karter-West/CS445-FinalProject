<template>
    <div class="fortune-wheel">
      <canvas ref="wheelCanvas" width="500" height="500" id="mahWheel"></canvas>
      <button @click="spinWheel">Spin the Wheel!</button>
    </div>
  </template>
  
  <script>
  import { gsap } from "gsap";
  
  export default {
    name: "FortuneWheel",
    data() {
      return {
        segments: ["Game 1", "Game 2", "Game 3", "Prize 4", "Prize 5", "Prize 6"],
        colors: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5"],
        currentAngle: 0,
      };
    },
    mounted() {
      this.drawWheel();
    },
    methods: {
      drawWheel() {
        const canvas = this.$refs.wheelCanvas;
        const ctx = canvas.getContext("2d");
        const numSegments = this.segments.length;
        const anglePerSegment = (2 * Math.PI) / numSegments;
  
        for (let i = 0; i < numSegments; i++) {
          ctx.beginPath();
          ctx.moveTo(250, 250);
          ctx.arc(250, 250, 250, i * anglePerSegment, (i + 1) * anglePerSegment);
          ctx.save();
  
          ctx.translate(250, 250);
          ctx.rotate((i + 0.5) * anglePerSegment);
          ctx.textAlign = "right";
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "20px Arial";
          ctx.fillText(this.segments[i], 230, 10);
          ctx.restore();
        }
      },
      spinWheel() {
        const spins = 1;
        const finalAngle = spins * 60;
        gsap.to(this, {
          currentAngle: this.currentAngle + finalAngle,
          duration: 1,
          ease: "power4.out",
          onUpdate: this.updateWheel
        });
      },
      updateWheel() {
        const canvas = this.$refs.wheelCanvas;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 500, 500);
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate((this.currentAngle * Math.PI) / 180);
        ctx.translate(-250, -250);
        this.drawWheel();
        ctx.restore();
      },
      showResult() {
        const numSegments = this.segments.length;
        const anglePerSegment = 360 / numSegments;
        const winningSegmentIndex = Math.floor((360 - (this.currentAngle % 360)) / anglePerSegment);
        alert(`Congratulations! You won ${this.segments[winningSegmentIndex]}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .fortune-wheel {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
  }

  #mahWheel {
    position: relative;
    right: -100%;
  }
  </style>