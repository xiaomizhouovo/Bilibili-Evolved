(()=>{return(o,e)=>{const n=`<div class=v-dropdown @click=toggleDropdown()><span class=selected>{{ value }}</span><ul class=dropdown-menu :class="{ opened: dropdownOpen }"><li v-for="item in items":key=item :data-value=item @click=select(item)>{{ item }}</ul><i class="mdi mdi-chevron-down"></i></div>`;e.applyStyleFromText(`.v-dropdown{position:relative;background-color:#8884;cursor:pointer;display:flex;align-items:center;justify-content:space-between;min-width:100px}.v-dropdown .dropdown-menu{transform-origin:top;transform:scaleY(0) translateX(-50%);position:absolute;top:calc(100% + 2px);left:50%;background-color:var(--download-video-background);z-index:1;transition:.2s cubic-bezier(.6,-.28,.74,.05);box-shadow:rgba(0,0,0,.2) 0 4px 8px 0}.v-dropdown .dropdown-menu.opened{transform:scaleY(1) translateX(-50%);transition-timing-function:cubic-bezier(.18,.89,.32,1.28)}.v-dropdown .dropdown-menu li{padding:4px 8px;white-space:nowrap;min-width:80px;text-align:center;cursor:pointer;color:var(--download-video-foreground);background-color:transparent}.v-dropdown .dropdown-menu li:hover{background-color:rgba(0,0,0,.16)}.v-dropdown .mdi-chevron-down{font-size:16pt;line-height:1;transform:rotate(0)}.v-dropdown .dropdown-menu.opened~.mdi-chevron-down{transform:rotate(180deg)}.v-dropdown .selected{user-select:none;padding:4px 8px}`,"v-dropdown-style");return{export:Object.assign({template:n},Vue.extend({props:["items","value"],data(){return{dropdownOpen:false}},methods:{toggleDropdown(){this.dropdownOpen=!this.dropdownOpen},select(o){this.$emit("update:value",o);this.$emit("change",o)}}}))}}})();