export class ScrollController {
  private sections: HTMLElement[]
  private onSectionChange: (index: number) => void
  private currentSection = 0
  private isScrolling = false
  private scrollTimeout: number | null = null

  constructor(sections: HTMLElement[], onSectionChange: (index: number) => void) {
    this.sections = sections
    this.onSectionChange = onSectionChange
    this.init()
  }

  private init() {
    window.addEventListener('wheel', this.handleWheel.bind(this))
    window.addEventListener('touchstart', this.handleTouchStart.bind(this))
    window.addEventListener('touchmove', this.handleTouchMove.bind(this))
  }

  private handleWheel(e: WheelEvent) {
    e.preventDefault()
    if (this.isScrolling) return

    if (e.deltaY > 0 && this.currentSection < this.sections.length - 1) {
      this.scrollToSection(this.currentSection + 1)
    } else if (e.deltaY < 0 && this.currentSection > 0) {
      this.scrollToSection(this.currentSection - 1)
    }
  }

  private touchStartY = 0

  private handleTouchStart(e: TouchEvent) {
    this.touchStartY = e.touches[0].clientY
  }

  private handleTouchMove(e: TouchEvent) {
    if (this.isScrolling) return

    const touchEndY = e.touches[0].clientY
    const diff = this.touchStartY - touchEndY

    if (Math.abs(diff) > 50) {
      if (diff > 0 && this.currentSection < this.sections.length - 1) {
        this.scrollToSection(this.currentSection + 1)
      } else if (diff < 0 && this.currentSection > 0) {
        this.scrollToSection(this.currentSection - 1)
      }
      this.touchStartY = touchEndY
    }
  }

  public scrollToSection(index: number) {
    if (this.isScrolling) return
    
    this.isScrolling = true
    this.currentSection = index
    this.onSectionChange(index)

    window.scrollTo({
      top: this.sections[index].offsetTop,
      behavior: 'smooth'
    })

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout)
    }

    this.scrollTimeout = window.setTimeout(() => {
      this.isScrolling = false
    }, 1000)
  }

  public destroy() {
    window.removeEventListener('wheel', this.handleWheel.bind(this))
    window.removeEventListener('touchstart', this.handleTouchStart.bind(this))
    window.removeEventListener('touchmove', this.handleTouchMove.bind(this))
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout)
    }
  }
} 