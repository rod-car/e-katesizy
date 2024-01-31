<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\GroupRepository;
use ApiPlatform\Metadata\ApiResource;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: GroupRepository::class)]
#[ORM\Table(name: '`group`')]
#[ApiResource]
class Group
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:sc'])]
    private ?string $label = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:sc'])]
    private ?string $notation = null;

    #[ORM\OneToMany(mappedBy: 'class_group', targetEntity: StudentClass::class, orphanRemoval: true)]
    private Collection $studentClass;

    public function __construct()
    {
        $this->studentClass = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function getNotation(): ?string
    {
        return $this->notation;
    }

    public function setNotation(string $notation): static
    {
        $this->notation = $notation;

        return $this;
    }

    /**
     * @return Collection<int, StudentClass>
     */
    public function getStudentClass(): Collection
    {
        return $this->studentClass;
    }

    public function addStudentClass(StudentClass $studentClass): static
    {
        if (!$this->studentClass->contains($studentClass)) {
            $this->studentClass->add($studentClass);
            $studentClass->setClassGroup($this);
        }

        return $this;
    }

    public function removeLevel(StudentClass $level): static
    {
        if ($this->studentClass->removeElement($level)) {
            // set the owning side to null (unless already changed)
            if ($level->getClassGroup() === $this) {
                $level->setClassGroup(null);
            }
        }

        return $this;
    }
}
