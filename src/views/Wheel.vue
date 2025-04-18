<template>
    <div class="fortune-wheel">
      <canvas ref="wheelCanvas" width="500" height="500" ></canvas>
      <i class="pi pi-sort-down-fill"></i>
    </div>
</template>
  
  <script>
  import { gsap } from "gsap";
  
  export default {
    name: "FortuneWheel",
    data() {
      return {
        segments: ["Game 1", "Game 2", "Game 3", "Game 4", "Game 5", "Game 6"],
        currentAngle: 30,
        isAnimating: false,
      };
    },
    mounted() {
      this.updateWheel();
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
          ctx.fillStyle = "#F9ED69";
          ctx.font = "20px 'Press Start 2P'";
          ctx.fillText(this.segments[i], 230, 10);
          ctx.restore();
        }
      },
      spinWheel() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;

        const spins = 1;
        const finalAngle = spins * 60;
        gsap.to(this, {
          currentAngle: this.currentAngle + finalAngle,
          duration: 1,
          ease: "power4.out",
          onUpdate: this.updateWheel,
          onComplete: () => {
            this.isAnimating = false;
          }
        });
      },
      revSpinWheel() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;

        const spins = 1;
        const finalAngle = spins * 60;
        gsap.to(this, {
          currentAngle: this.currentAngle - finalAngle,
          duration: 1,
          ease: "power4.out",
          onUpdate: this.updateWheel,
          onComplete: () => {
            this.isAnimating = false;
          }
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
    align-items: center;
  }

  .pi-sort-down-fill {
    font-size: 50px;
    color: #F08A5D;
    margin-left: 0vh;
    cursor: pointer;
    rotate: 90deg;
  }


  </style>