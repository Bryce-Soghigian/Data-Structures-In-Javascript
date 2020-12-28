class TrieNode{
    constructor(prefix){
      this.children = new Map()
      this.isWord = false; // To determine if all the nodes up to the current one make up a word
      this.prefix = prefix; // Will contain the character, or the full word at end nodes
    }
  }

  class Trie{
      constructor(){
          this.trie = new TrieNode("*");
      }
      insert(word){
        let curr = this.trie;
        for(let character of word) {
            if(!curr.children.has(character)){
                curr.children.set(character,new TrieNode(character))
            }
            curr = curr.children.get(character)
        }
        curr.isWord = true;
        curr.prefix = word
      }

      search(word){
          let curr = this.trie;
          for(let character of word){
              if(!curr.children.has(character)) return false
              curr = curr.children.get(character)
          }
          return curr.isWord
      }

      startsWith(prefix){
          let curr = this.trie;
          for(let character of prefix){
              if(!curr.children.has(character)) return false
              curr = curr.children.get(character)
          }
          return true;
      }
  }